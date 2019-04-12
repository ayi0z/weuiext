// import 'weui';
import FastClick from 'fastclick';
import weui from '../src/weui';

FastClick.attach(document.body);

document.querySelector('#inputPickerBtn').addEventListener('click', function () {
    weui.inputPicker([{
        label: '飞机票',
        value: 0
    }, {
        label: '火车票(disabled)',
        disabled: true,
        value: 1
    }, {
        label: '的士票(disabled)',
        disabled: true,
        value: 2
    }, {
        label: '住宿费',
        value: 3
    }, {
        label: '礼品费',
        value: 4
    }, {
        label: '活动费',
        value: 5
    }, {
        label: '通讯费',
        value: 6
    }, {
        label: '补助',
        value: 7
    }, {
        label: '通讯费',
        value: 8
    }, {
        label: '其他',
        value: 9
    }], {
        defaultValue: [8],
        className: 'custom-classname',
        onChange: function (result) {
            //console.log(item, index);
            console.log(result);
        },
        onConfirm: function (result) {
            console.log(result);
        },
        onInputChange:function(value){
            console.log(value, '22222');
        },
        id: 'picker'
    });
});
