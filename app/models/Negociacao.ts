export class Negociacao
{

    constructor(private _data: Date, private _quantidade: number, private _valor: number)
    {
    }

    get data(): Date
    {
        return this._data;
    }

    get quantidade(): number
    {
        return this._quantidade;
    }

    get valor(): number
    {
        return this._valor;
    }

    get volume(): number
    {
        return this._quantidade * this._valor;
    }

    public static criaDe(data: Date, quantidade: number, valor: number): Negociacao
    {
        return new Negociacao(data, quantidade, valor);
    }

}