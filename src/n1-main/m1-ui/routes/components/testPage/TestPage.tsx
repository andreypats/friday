import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../common/c3-SuperCheckbox/SuperCheckbox";

export const TestPage = () => {

    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <div>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                />
            </div>
            <div>
                <SuperButton
                    onClick={showAlert}
                >
                    Enter
                </SuperButton>
            </div>
            <div>
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
        </div>
    )
}