import React from 'react';
import { Search, MoreVert } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';


let timeout = null;

const HeaderSearchBar2 = ({ history }) => {
    const inputRef = React.createRef();
    const [toggle, setToggle] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const slickSearchIcon = () => {
        if (!toggle) inputRef.current.focus();
        setToggle(!toggle);
    };
    const handleRightIcon = (history) => {
        if (!toggle) inputRef.current.focus();
        setToggle(!toggle);
        history.push('clients/configuration')
    };

    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    const classAppear = 'searchFab__circle d-flex align-items-center justify-content-start';

    return (
        <div className="searchFab d-flex align-items-center justify-content-between w-75">
            <div className={toggle ? `${classAppear} extended` : classAppear}>
                <IconButton onClick={() => { slickSearchIcon(); }}>
                    <Search id="actions_search_tag" />
                </IconButton>
                <input
                    id="mobile_input_search"
                    autoComplete="false"
                    ref={inputRef}
                    type="text"
                    value={search}
                    placeholder={'Name'}
                    onFocus={() => { setToggle(true); }}
                    onChange={(event) => { handleChangeSearch(event); }}
                    onBlur={() => { slickSearchIcon(); }}
                    onKeyUp={(e) => {
                        clearTimeout(timeout);
                        if (e.keyCode !== 13) {
                            timeout = setTimeout(() => {
                                console.log('abc')
                            }, 750);
                        } else {
                            console.log('abc')
                        }
                    }}
                />
                <IconButton onClick={() => { handleRightIcon(history); }}>
                    <MoreVert id="actions_more_tag" />
                </IconButton>
            </div>
        </div>
    );
};

export default HeaderSearchBar2;
