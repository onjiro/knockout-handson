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

        self.todos = ko.observableArray();
        self.current = ko.observable();

        self.add = function(viewModel, e) {
            alert(self.current());
        }
    }

    // アプリケーションをセットアップ
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
})();
