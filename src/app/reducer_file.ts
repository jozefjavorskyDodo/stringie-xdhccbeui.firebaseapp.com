
import { createReducer, on } from "@ngrx/store";
import { pseudo_random_strs } from "./actions_file";
// import { of, from, map } from "rxjs";

export const initialState: string = '';

export const _reducer_ = createReducer(
    initialState,
    on(pseudo_random_strs, (UI_state_view) => <string>call_math_library())
);

function call_math_library(): string {

    let arr_of_strs: Array<string> = [
        <string>'', <string>'', <string>'',
        <string>'', <string>'', <string>'',
        <string>'', <string>'', <string>''
    ];

    for (let yndx = 0; yndx <= arr_of_strs.length - 1; yndx++) {
        for (let indx = 0; indx <= 8; indx++) {
            arr_of_strs[yndx] += String.fromCharCode(
                Number(
                    (Math.floor(Math.random() * 26) + 1) + 96)
            );
        };
    };

    return <string>`
        ${arr_of_strs[0]}
        ${arr_of_strs[1]}
        ${arr_of_strs[2]}
        ${arr_of_strs[3]}
        ${arr_of_strs[4]}
        ${arr_of_strs[5]}
        ${arr_of_strs[6]}
        ${arr_of_strs[7]}
        ${arr_of_strs[8]}
    `;
}