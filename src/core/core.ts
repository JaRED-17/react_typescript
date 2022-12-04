import Goods from "./Goods/Goods"

class Core {
    goods: any

    constructor () {
        this.goods = new Goods()
    }
}

const core = new Core()

export default core