(function() {

    //initial data
    var initData = [
        [7, 2, 4, , , 3, 8, , , ],
        [8, , , , 7, , , , 9],
        [, 6, , , 8, 1, , , ],
        [2, , 5, 4, , 8, 6, 1, 7],
        [9, , 6, , , , 2, , 3],
        [1, 4, 7, , 2, 6, 5, , ],
        [5, 1, , , 4, 7, 9, , 2],
        [6, , 2, , 3, 9, 4, , 5],
        [, 9, 3, 8, 5, , 1, , ],
    ];

    //data for handsontable
    var htData = [];
    initData.forEach(function(array) {
        htData.push(array.concat());
    });

    var htElement = document.getElementById('ht');

    var initializeHandsonTable = function() {

        var getHtCustomeBorder = function() {
            //width of bold border
            var defaultWidth = {
                width: 2,
            };

            //create range Object 
            var createRange = function(idx, isCol) {
                return {
                    from: {
                        col: isCol ? idx : 0,
                        row: isCol ? 0 : idx,
                    },
                    to: {
                        col: isCol ? idx : 8,
                        row: isCol ? 8 : idx,
                    }
                };
            };

            return [{
                range: createRange(2, true),
                right: defaultWidth,
            }, {
                range: createRange(5, true),
                right: defaultWidth,
            }, {
                range: createRange(2, false),
                bottom: defaultWidth,
            }, {
                range: createRange(5, false),
                bottom: defaultWidth,
            }, {
                col: 2,
                row: 2,
                bottom: defaultWidth,
                right: defaultWidth,
            }, {
                col: 5,
                row: 2,
                bottom: defaultWidth,
                right: defaultWidth,
            }, {
                col: 2,
                row: 5,
                bottom: defaultWidth,
                right: defaultWidth,
            }, {
                col: 5,
                row: 5,
                bottom: defaultWidth,
                right: defaultWidth,
            }];
        };

        var ht = new Handsontable(htElement, {
            data: htData,
            minSpareRows: 0,
            className: 'htcenter',
            colHeaders: false,
            //colHeaders : function(index) { return index;},
            colWidths: 25,
            columnSorting: false,
            contextMenu: false,
            //columns:[],
            comments: true,
            copyColsLimit: 10,
            copyRowsLimit: 10,
            currentColClassName: 'current-col',
            currentRowClassName: 'current-row',
            copyPaste: true,
            customBorders: getHtCustomeBorder(),
            autoColumnSize: false,
            autoWrapCol: true,
            autoWrapRow: true,
            cells: function(row, col, prop) {
                //console.log(this);
                var cellProperties = {};
                if (initData[row][col]) {
                    cellProperties.readOnly = true;
                }
                return cellProperties;
            },
            //validator: validation,
            //allowInvalid: true,
            //autoComplete: [0,1,2,3,4,5,67,8,9]
        });
    };

    var validation = function() {
        console.log(this);
        return true;
        //return htData[this.row][this.col] && 0 < htData[this.row][this.col] && htData[this.row][this.col] < 10
    };

    initializeHandsonTable();

})();
