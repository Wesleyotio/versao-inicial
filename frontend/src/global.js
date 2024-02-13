import Vue from "vue"

export const userKey = '_vue_front_user'
export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    if ( e && e.response && e.response.data ) {
        Vue.Toasted.global.defaultError({
            msg: e.response.data
        })
    }
    else if (typeof e === 'string') {
        Vue.Toasted.global.defaultError({msg : e})
    } 
    else {
        Vue.Toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }