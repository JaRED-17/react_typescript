import { makeObservable, observable, action } from 'mobx'

class API {
    loading: boolean;
    error: boolean;
    errorMessage: string;
    response: any

    constructor () {
        this.loading = true
        this.error = false
        this.errorMessage = ''
        this.response = null
        makeObservable(this, {
            loading: observable,
            setLoading: action.bound
        })
    }

    /* loading */
    getLoading = () => this.loading
    setLoading = (flag: boolean) => { this.loading = flag }

    /* error */
    getError = () => this.error
    setError = (flag: boolean) => { this.error = flag }

    /* errorMessage */
    getErrorMessage = () => this.errorMessage
    setErrorMessage = (message: string) => { this.errorMessage = message }

    /* response */
    getResponse = () => this.response
    setResponse = (response: any) => { this.response = response }

    getStatus = () => ({
        response: this.getResponse.bind(this),
        loading: this.getLoading.bind(this),
        error: this.getError.bind(this),
        errorMessage: this.getErrorMessage.bind(this)
    })

    call = (url: string, init: any, defaultValue: string = '', type: string = 'json'): any => {
        this.setResponse(null)
        if (!this.getLoading()) {
            this.setLoading(true)
        }
        this.setError(false)
        this.setErrorMessage('')

        return fetch(url, init)
            .then(response => {
                return response.status === 200
                    ? type === 'json'
                        ? response.json()
                        : response.text()
                    : defaultValue
            })
            .then(response => {
                this.setResponse(response)
                this.setLoading(false)
                return response
            })
            .catch(error => {
                this.setResponse(null)
                this.setLoading(false)
                this.setError(true)
                this.setErrorMessage(error.message)
                console.error(error.message)
            })
    }
}

export default API