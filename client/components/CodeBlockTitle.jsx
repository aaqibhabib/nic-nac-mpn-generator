import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import CodeIcon from 'material-ui/svg-icons/action/code';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

const CodeBlockTitle = props => (
    <Toolbar>
        <ToolbarGroup>
            <ToolbarTitle text={props.title || 'Example'} />
        </ToolbarGroup>
        <ToolbarGroup>
            <IconButton touch tooltip={'Download'}>
                <DownloadIcon />
            </IconButton>
            <IconButton touch tooltip={'Copy to clipboard'}>
                <CopyIcon />
            </IconButton>
            <IconButton touch tooltip={props.tooltip}>
                <CodeIcon />
            </IconButton>
        </ToolbarGroup>
    </Toolbar>
);

CodeBlockTitle.propTypes = {
    title: PropTypes.string,
    tooltip: PropTypes.string,
};

export default CodeBlockTitle;
