import React, { useCallback, useMemo, useState } from 'react';
import { Editor, Transforms, createEditor, Element as SlateElement } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, Editable, withReact } from 'slate-react';
import Element from './editorComponents/Element';
import Leaf from './editorComponents/Leaf';
import isHotkey from 'is-hotkey';

import { HexColorPicker } from 'react-colorful';

import {
    MdCode,
    MdFormatBold,
    MdFormatColorFill,
    MdFormatItalic,
    MdFormatQuote,
    MdFormatUnderlined,
} from 'react-icons/md';

const headerInitialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'Click to add header' }],
    },
];

const bodyInitialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'Click to edit body' }],
    },
];

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: (n) =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
        }),
    );

    return !!match;
};

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
    );
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    });
    let newProperties;
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        };
    } else {
        newProperties = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        };
    }
    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

const toggleMark = (editor, format, value) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, value);
    }
};

const NudgeEditor = (props) => {
    const headerEditor = useMemo(() => withHistory(withReact(createEditor())), []);
    const bodyEditor = useMemo(() => withHistory(withReact(createEditor())), []);

    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

    const [headerState, setHeaderState] = useState({
        display: false,
        x: 0,
        y: 0,
    });
    const [bodyState, setBodyState] = useState({
        display: false,
        x: 0,
        y: 0,
    });

    const showHeaderEditor = (e) => {
        const target = e.currentTarget;
        const boundingRect = target.getBoundingClientRect();
        setHeaderState({
            display: true,
            x: boundingRect.x,
            y: boundingRect.y - 35,
        });
        setBodyState({
            display: false,
            x: 0,
            y: 0,
        });
    };

    const showBodyEditor = (e) => {
        const target = e.currentTarget;
        const boundingRect = target.getBoundingClientRect();
        setBodyState({
            display: true,
            x: boundingRect.x,
            y: boundingRect.y - 35,
        });
        setHeaderState({
            display: false,
            x: 0,
            y: 0,
        });
    };

    const closeSlateToolbar = () => {
        setHeaderState({
            display: false,
            x: 0,
            y: 0,
        });

        setBodyState({
            display: false,
            x: 0,
            y: 0,
        });
    };

    return (
        <div className="editor-container">
            {headerState.display && (
                <>
                    <SlateToolbar
                        style={{
                            top: `${headerState.y}px`,
                            left: `${headerState.x > 20 ? headerState.x : 20}px`,
                        }}
                        editor={headerEditor}
                    />
                    <div className="toolbar-click-close" onClick={closeSlateToolbar}></div>
                </>
            )}
            {bodyState.display && (
                <>
                    <SlateToolbar
                        style={{
                            top: `${bodyState.y}px`,
                            left: `${bodyState.x > 20 ? bodyState.x : 20}px`,
                        }}
                        editor={bodyEditor}
                    />
                    <div className="toolbar-click-close" onClick={closeSlateToolbar}></div>
                </>
            )}
            <div className="editor-card">
                <div className="editor-header" onClick={(e) => showHeaderEditor(e)}>
                    <Slate editor={headerEditor} initialValue={headerInitialValue}>
                        <Editable
                            renderElement={renderElement}
                            renderLeaf={renderLeaf}
                            spellCheck
                            onKeyDown={(event) => {
                                for (const hotkey in HOTKEYS) {
                                    if (isHotkey(hotkey, event)) {
                                        event.preventDefault();
                                        const mark = HOTKEYS[hotkey];
                                        toggleMark(headerEditor, mark);
                                    }
                                }
                            }}
                            maxLength={15}
                        />
                    </Slate>
                    <div className="editor-close">X</div>
                </div>
                <div className="editor-body" onClick={(e) => showBodyEditor(e)}>
                    <Slate editor={bodyEditor} initialValue={bodyInitialValue}>
                        <Editable
                            renderElement={renderElement}
                            renderLeaf={renderLeaf}
                            spellCheck
                            onKeyDown={(event) => {
                                for (const hotkey in HOTKEYS) {
                                    if (isHotkey(hotkey, event)) {
                                        event.preventDefault();
                                        const mark = HOTKEYS[hotkey];
                                        toggleMark(bodyEditor, mark);
                                    }
                                }
                            }}
                            maxLength={90}
                        />
                    </Slate>
                </div>
            </div>
        </div>
    );
};

const SlateToolbar = (props) => {
    const [color, setColor] = useState('#aabbcc');

    const [displayColorPicker, setDisplayColorPicker] = useState({
        display: false,
        x: 0,
        y: 0,
    });

    const handleColorPicker = (event) => {
        const target = event.currentTarget;
        const boundingRect = target.getBoundingClientRect();
        setDisplayColorPicker({
            display: true,
            x: boundingRect.x,
            y: boundingRect.y - 130,
        });
    };

    const closeHexColorPicker = () => {
        setDisplayColorPicker({
            display: false,
            x: 0,
            y: 0,
        });
    };

    return (
        <>
            {displayColorPicker.display && (
                <>
                    <HexColorPicker
                        color={color}
                        onChange={setColor}
                        style={{
                            left: `${displayColorPicker.x}px`,
                            top: `${displayColorPicker.y}px`,
                        }}
                    />
                    <div className="hex-color-onclick-close" onClick={closeHexColorPicker}></div>
                </>
            )}
            <div className="slate-toolbar" style={props.style}>
                <MarkButton format="bold" icon={<MdFormatBold />} editor={props.editor} />
                <MarkButton format="italic" icon={<MdFormatItalic />} editor={props.editor} />
                <MarkButton
                    format="underline"
                    icon={<MdFormatUnderlined />}
                    editor={props.editor}
                />
                <MarkButton format="code" icon={<MdCode />} editor={props.editor} />
                <MarkButton
                    format="color"
                    icon={<MdFormatColorFill />}
                    editor={props.editor}
                    value={color}
                    onClick={(e) => handleColorPicker(e)}
                />
                <BlockButton format="block-quote" icon={<MdFormatQuote />} editor={props.editor} />
            </div>
        </>
    );
};

const MarkButton = ({ format, icon, editor, value, onClick }) => {
    return (
        <button
            className={isMarkActive(editor, format) ? 'active' : ''}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format, value ? value : true);
                if (onClick) {
                    onClick(event);
                }
            }}
        >
            {icon}
        </button>
    );
};

const BlockButton = ({ format, icon, editor }) => {
    return (
        <button
            active={isBlockActive(
                editor,
                format,
                TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
            )}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleBlock(editor, format);
            }}
        >
            {icon}
        </button>
    );
};

export default NudgeEditor;
