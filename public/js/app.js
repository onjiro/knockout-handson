(function() {
    /**
     * ひとつ分のTodo項目をに相当するモデルのコンストラクタ
     */
    var Todo = function(title, completed) {
        this.title = ko.observable(title);
        this.completed = ko.observable(completed);
        this.editing = ko.observable(editing);
    }

    /**
     * メインとなるビューモデルのコンストラクタ
     */
    var ViewModel = function() {
        var self = this;
        var todos = [];

        self.add = function(viewModel, e) {
            console.log(e);
        }
    }

    // アプリケーションをセットアップ
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
})();
