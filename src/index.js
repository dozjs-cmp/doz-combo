import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            items: [],
            search: '',
            value: '',
            listDisplay: 'block',
            placeholder: '',
            inputClassCss: 'input-text',
            isFocus: false,
            //selected: false
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
                    display: ${this.props.listDisplay};
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
                onfocus="this.onFocus()"
                onkeypress="this.onInputKeyPress()"
                onkeydown="this.onInputKeyDown()"
                d-ref="input"
                size="1"
                d-bind="value"
                class="${this.props.inputClassCss}"
                placeholder="${this.props.placeholder}"
            >
            <ul class="list">
                ${this.each(this.props.items, item =>
                (this.props.search || this.props.isFocus) && item &&
                    item.value.indexOf(this.props.search) !== -1 
                    ? this.h`<li forceupdate onclick="${(e) => this.onClick(item, e)}">${item.value}</li>` 
                    : this.h`<li style="display: none"></li>`
                )}
            </ul>
        `
    }

    onMount() {
        document.body.addEventListener('click', (e) => {
            if (e.target !== this.ref.input) {
                this.props.listDisplay = 'none';
            }
        });
    }

    onInput(e) {
        this.props.listDisplay = 'block';
        this.props.search = e.target.value;
    }

    onFocus(){
        this.props.isFocus = true;
        this.props.listDisplay = 'block';
    }

    onClick(item, e){
        this.props.value = e.target.outerText;
        this.props.listDisplay = 'none';
        this.emit('select', item);
    }

    onInputKeyPress(e){
        if (e.keyCode === 13) { //press invio
            this.props.onFocus = false;
            this.props.listDisplay = 'none';
        }
    }

    onInputKeyDown(e) {
        if(e.keyCode === 8 && e.target.value.length === 0) {
            //this.props.selected.pop();
        }
    }

};