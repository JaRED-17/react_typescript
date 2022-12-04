import API from '../API/API'

class Goods {
    _goods: any
    status: any
    API: any

    constructor () {
        this._goods = new API()
        this.API = this.data.bind(this)
        this.status = { ...this._goods.getStatus() }
    }

    data = () => this._goods.call('/api/goods', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    })
}

export default Goods