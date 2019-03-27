# doz-combo
Combo list component for DOZ

## Install
```
npm install --save doz-combo
```

Live <a href="https://dozjs-cmp.github.io/doz-combo/dist/index.html">here</a>

## Usage

Globally
```javascript
import Doz from 'doz'

new Doz({
        root: '#app',
        props:{
            items : [
                {key: 0, value: "zero"},
                {key: 1, value: "one"},
                {key: 2, value: "two"},
                {key: 3, value: "three"}
            ]
        },
        template(h) {
            return h`
                <doz-combo d:store="boundList"/>
            `
        },

        onMountAsync(){
            const combo = this.getStore('boundList');
            combo.items = this.props.items;
        }
    });

```

Locally
```javascript
import Doz from 'doz'

```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |

## Events

| Name | Args | Description |
| ---- | ------- | ----------- |
| items |  | Array string list for the combo |
| value |  | The value of the input field |


## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-combo/blob/master/CHANGELOG.md">here</a>

## License
doz-combo is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
Pietro Lembo