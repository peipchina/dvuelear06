var vm = new Vue({
    el: '#app',
    data: {
        infos: {
            name: "",
            sex: "",
            phone: "",
            birthday: "",
        },
        tableData: [{
            name: '网校户',
            sex: '男',
            phone: '15577589655',
            birthday: '2015-05-44'

        }, {
            name: '网校户',
            sex: '男',
            phone: '15577589655',
            birthday: '2015-05-44'
        }, {
            name: '网校户',
            sex: '男',
            phone: '15577589655',
            birthday: '2015-05-44'
        }, {
            name: '网校户',
            sex: '男',
            phone: '15577589655',
            birthday: '2015-05-44'
        }]
    },
    methods: {
        addinfo: function () {
            var date = new Date();
            var seperator = "-";
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var dd = y + seperator + m + seperator + d;
            var p = { name: this.infos.name, sex: this.infos.sex, phone: this.infos.phone, birthday: this.infos.birthday }
            this.tableData.push(p);
            this.infos.name = "";
            this.infos.sex = "";
            this.infos.phone = "";
            this.infos.birthday = dd;
        }
    }
})