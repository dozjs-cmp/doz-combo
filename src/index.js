import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            items: [],
            search: '',
            value: ''
        }
    }

    template(h) {
        return h`
            <style> 
                .list {
                    list-style-type: none;
                    text-align: left;
                    margin: 0;
                    padding: 0;
                    position: relative;
                    display: block;
                    z-index: 1;
                }
                .list > li{
                    box-sizing: border-box;
                    padding: 10px;
                    background: #eee;
                    color: black;
                    margin-bottom: 1px;
                    display: block;
                }
                .list > li:hover{
                    background-color: darkgrey;
                }
                .input-text{
                    width: 200px;
                    padding: 5px;
                }
            </style>
            <input 
                type="text" 
                oninput="this.onInput()"
                d-ref="input"
                size="1"
                d-bind="value"
                class="input-text"
            >
            <ul class="list">
                ${this.each(this.props.items, item => 
                    this.props.search && item &&
                    item.value.indexOf(this.props.search) !== -1 ? `<li onclick="this.onClick()">${item.value}</li>` : ''
                )}
            </ul>
        `
    }

    onInput(e) {
        this.props.search = e.target.value;
    }

    onClick(e) {
        console.log(e.target.outerText)
        this.props.value = e.target.outerText
    }

};