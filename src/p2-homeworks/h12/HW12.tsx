import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((store: AppStoreType) => store.theme);
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
                <SuperRadio
                    name={"radio"}
                    value={theme.theme}
                    options={themes}
                    onChangeOption={onChangeCallback}
                />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
