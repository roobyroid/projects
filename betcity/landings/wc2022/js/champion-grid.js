class ChampionGrid{
    constructor() {
        this.groupsItems = false;
        this.groupParentClass = 'b-groups-list';
        this.groupsListItemClass = 'b-groups-list__itm';
        this.groupsTeamItemClass = 'b-group__row';
        this.groupsTeamFirstClass = '_first';
        this.groupsTeamSecondClass = '_second';

        this.listGridClass = 'list-grid';
        this.listGridColumnClass = 'list-grid__col';
        this.gridItemLeftClass = '_left';
        this.gridItemRightClass = '_right';
        this.gridItemFinalClass = '_final';
        this.gridTeamClass = 'b-team';
        this.gridTeamGroupClass = 'list-grid__col-group';

        this.listGrid = document.querySelector('.'+this.listGridClass);

        // set groups team items
        this.setGroups();

        this.selectedGroupTeams = [];

        this.gridPositions = [
            [[0, 0], [1, 1]],
            [[0, 2], [1, 3]],
            [[0, 4], [1, 5]],
            [[0, 6], [1, 7]],
            [[0, 1], [1, 0]],
            [[0, 3], [1, 2]],
            [[0, 5], [1, 4]],
            [[0, 7], [1, 6]],
        ];
        this.gridTeams = false;

        this.addGroupEvents();
        this.addGridTeamsEvents();

        // setTimeout(function (){
        //     this.test();
        // }.bind(this), 1000);
    }

    setGroups(){
        this.groupsItems = document.querySelectorAll('.'+this.groupParentClass+' .'+this.groupsListItemClass);
    }

    initialize(){
        console.debug('Initialize');
    }

    getCountSelectedTeamsInGroups(){
        this.selectAllGroupTeams();
        var count = 0;
        this.selectedGroupTeams.forEach(function (elemGroup){
            if (elemGroup){
                Object.entries(elemGroup).forEach(function ([key, value]){
                    if (value) count++;
                });
            }
        });
        // console.debug('count selected team in group: ',count);
        // console.debug('selectedGroupTeams:');
        // console.debug(this.selectedGroupTeams);
        return count;
    }

    addSelectedGroupTeam(groupIndex, index, elem){
        if (!this.selectedGroupTeams[groupIndex]){
            var tmpObj = {};
            tmpObj[index] = elem;
            this.selectedGroupTeams[groupIndex] = tmpObj;
        } else {

            this.selectedGroupTeams[groupIndex][index] = elem;
        }

    }

    // for all teams get selected teams
    selectAllGroupTeams(){
        this.groupsItems.forEach(function (elemTeamList){
            var selectFirst = elemTeamList.querySelector('.'+this.groupsTeamItemClass+'.'+this.groupsTeamFirstClass);
            var selectSecond = elemTeamList.querySelector('.'+this.groupsTeamItemClass+'.'+this.groupsTeamSecondClass);
            var groupIndex = Array.prototype.slice.call( this.groupsItems).indexOf(elemTeamList);

            (selectFirst) ? this.addSelectedGroupTeam(groupIndex, 0, selectFirst) : this.addSelectedGroupTeam(groupIndex, 0, false);
            (selectSecond) ? this.addSelectedGroupTeam(groupIndex, 1, selectSecond) : this.addSelectedGroupTeam(groupIndex, 1, false);

        }.bind(this));
    }


    setGridTeams(){
        this.gridTeams = [];
        this.gridPositions.forEach(function (row, indRow){
            var tmpArr = [];
            row.forEach(function (column, indColumn){
                tmpArr.push(this.selectedGroupTeams[column[1]][column[0]]);
            }.bind(this));
            this.gridTeams.push(tmpArr);
        }.bind(this));
    }

    checkGroupTeamFinishState(elemTeam){
        // scroll on mobile
        this.checkFillGroup(elemTeam);

        var count = this.getCountSelectedTeamsInGroups();
        var btnNextGrid = document.querySelector('[data-state="groups"] .s-hero__content-nav .btn');
        // console.debug(this.selectedGroupTeams);
        if (count === 16) {
            this.clearGrid();
            this.setGridTeams();
            this.fillGrid();
            if (!btnNextGrid) app.setState('grid');
            else btnNextGrid.classList.remove('disabled');
            //
            return true;
        } else {
            if (btnNextGrid) btnNextGrid.classList.add('disabled');
        }
        return false;
    }

    checkFillGroup(elemTeam){
        if (window.innerWidth < 678){
            var parent = elemTeam.closest('.'+this.groupsListItemClass);
            if (parent.querySelectorAll('.'+this.groupsTeamItemClass+'.'+this.groupsTeamFirstClass
                +', '+'.'+this.groupsTeamItemClass+'.'+this.groupsTeamSecondClass
            ).length === 2){
                // console.debug('This row is filled: ', parent);
                var allGroups = this.groupsItems;
                // console.debug('items', this.groupsItems);

                var groupIndex = Array.prototype.slice.call(
                    this.groupsItems
                ).indexOf(parent);
                // console.debug('groupIndex: ',groupIndex);
                var nextGroups = Array.prototype.slice.call(this.groupsItems, groupIndex);
                // console.debug('nextGroups: ',nextGroups);

                if (!this.checkNextGroups(nextGroups)){
                    this.checkNextGroups(this.groupsItems);
                }
            }
        }
    }

    checkNextGroups(groups){
        // console.debug('groups.length: ',groups.length);
        if (!groups.length) return false;

        for (var ind=0; ind<groups.length; ind++){
            var group = groups[ind];
            // console.debug(ind, group, group.querySelectorAll('.'+this.groupsTeamItemClass+'.'+this.groupsTeamFirstClass
            //     +', '+'.'+this.groupsTeamItemClass+'.'+this.groupsTeamSecondClass).length);
            if (group.querySelectorAll('.'+this.groupsTeamItemClass+'.'+this.groupsTeamFirstClass
                +', '+'.'+this.groupsTeamItemClass+'.'+this.groupsTeamSecondClass).length !== 2){
                this.scrollToNextGroup(group);
                return ind;

            }
        }
        return false;
    }
    scrollToNextGroup(group){
        // console.debug(group, 'top: ',group.offsetTop);
        window.scroll({top: group.offsetTop+48, behavior: 'smooth'});
    }

    clearGrid(classClean){
        var teams = this.listGrid.querySelectorAll('.'+this.gridTeamClass);
        this.clearGridElements(teams);
    }

    clearGridElements(elements){
        if (elements.length){
            elements.forEach(function (elem){
                elem.querySelector('.b-team__flag').innerHTML = '';
                elem.querySelector('.b-team__name').textContent = '';
                elem.dataset.teamId = '';
            });
        }
    }

    clearNextColumns(elem, otherElem, teamIds){
        var nextColumn = this.getNextGridColumn(elem);
        var parentColumn = elem.closest('.'+this.listGridColumnClass);
        var is_left = false;
        var groupIndex = Array.prototype.slice.call(
            parentColumn.closest('.'+this.listGridColumnClass).querySelectorAll('.'+this.gridTeamGroupClass)
        ).indexOf(elem.closest('.'+this.gridTeamGroupClass));

        if (nextColumn && parentColumn.classList.contains(this.gridItemLeftClass) ){
            is_left = true;
        }

        if (nextColumn){

            if (nextColumn.classList.contains(this.gridItemFinalClass)){
                groupIndex = (is_left) ? 0 : 1;
            } else {

            }
            var teams = nextColumn.querySelectorAll('.'+this.gridTeamClass);
            if (teams.length){

                var nextTeam = teams[groupIndex];
                if (nextTeam){
                    // var activeTeam = nextColumn.querySelector('.'+this.gridTeamClass+'.is-active');
                    // if (!skipActive){}
                    // if (otherElem.dataset.teamId === elem.dataset.teamId
                    // console.debug('teamIds.indexOf(elem.dataset.teamId): ',teamIds.indexOf(elem.dataset.teamId));
                    if (teamIds.indexOf(nextTeam.dataset.teamId) > -1
                        // || !nextTeam.classList.contains('is-active')

                    ){
                        // console.debug(nextTeam, 'class: ',nextTeam.classList.contains('is-active'), 'teams.length: ',teams.length);
                        this.clearGridElements([nextTeam]);
                        nextTeam.classList.remove('is-active');
                    }
                    // if (!nextTeam.classList.contains('is-active') && teams.length > 1){
                    // }
                    // if (activeTeam && activeTeam !== nextTeam) activeTeam.click();
                    this.clearNextColumns(nextTeam, otherElem, teamIds);
                }
            }

            // console.debug('nextTeam: ',nextTeam);
            // this.setupTeamData(nextTeam, elem.dataset.teamId);
            // console.debug('elem.teamId: ',elem.dataset.teamId);
            // nextTeam.teamId = elem.teamId;
            // next
        }
    }

    fillFirstGridColumn(column, left = true){
        column.querySelectorAll('.'+this.gridTeamGroupClass).forEach(function (teamRow, indRow){
            var gridTeamIndex = (left) ? indRow : indRow + 4;

            var teams = teamRow.querySelectorAll('.'+this.gridTeamClass);
            var first = teams[0];
            var second = teams[1];

            this.setupTeamData(first, gridTeamIndex.toString()+'_0');

            this.setupTeamData(second, gridTeamIndex.toString()+'_1');

        }.bind(this));

    }

    setupTeamData(changeTeam, teamStrInd){
        var teamIndxs = teamStrInd.split('_');
        teamIndxs = teamIndxs.map(str => {
            return Number(str);
        });
        changeTeam.querySelector('.b-team__flag').innerHTML = '<img width="40" src="'+this.gridTeams[teamIndxs[0]][teamIndxs[1]].querySelector('._flag img').src+'">';
        changeTeam.querySelector('.b-team__name').textContent = this.gridTeams[teamIndxs[0]][teamIndxs[1]].dataset.team;
        changeTeam.dataset.code = this.gridTeams[teamIndxs[0]][teamIndxs[1]].dataset.code;
        changeTeam.dataset.teamId = teamIndxs[0].toString()+'_'+teamIndxs[1].toString();
        changeTeam.dataset.fullName = this.gridTeams[teamIndxs[0]][teamIndxs[1]].querySelector('._team').textContent;
    }

    fillGrid(){
        if (!this.listGrid) return false;
        // console.debug('Fill Grid');

        var leftFirstColumn = this.listGrid.querySelector('.'+this.listGridColumnClass+'.'+this.gridItemLeftClass+':first-child');
        var rightFirstColumn = this.listGrid.querySelector('.'+this.listGridColumnClass+'.'+this.gridItemRightClass+':last-child');

        this.fillFirstGridColumn(leftFirstColumn);
        this.fillFirstGridColumn(rightFirstColumn, false);
    }

    // event select team in group
    selectGroupTeam(e){
        var elemTeam = e.currentTarget;
        var parent = elemTeam.closest('.'+this.groupsListItemClass);
        var groupIndex = Array.prototype.slice.call( this.groupsItems).indexOf(parent);
        var selectFirst = parent.querySelector('.'+this.groupsTeamItemClass+'.'+this.groupsTeamFirstClass);
        var selectSecond = parent.querySelector('.'+this.groupsTeamItemClass+'.'+this.groupsTeamSecondClass);
        // var teams = parent.querySelectorAll('.'+this.groupsTeamItemClass);

        if (selectFirst && selectSecond){
            if (elemTeam.classList.contains(this.groupsTeamFirstClass)){
                elemTeam.classList.remove(this.groupsTeamFirstClass);
                // this.selectedGroupTeams[groupIndex][0] = false;
                this.addSelectedGroupTeam(groupIndex, 0, false);
                this.checkGroupTeamFinishState(elemTeam); return true;
            }
            elemTeam.classList.remove(this.groupsTeamSecondClass);
            // this.selectedGroupTeams[groupIndex][1] = false;
            this.addSelectedGroupTeam(groupIndex, 1, false);
            this.checkGroupTeamFinishState(elemTeam); return true;
        }
        if (selectFirst){
            if (elemTeam.classList.contains(this.groupsTeamFirstClass)){
                elemTeam.classList.remove(this.groupsTeamFirstClass);
                // this.selectedGroupTeams[groupIndex][0] = false;
                this.addSelectedGroupTeam(groupIndex, 0, false);
                this.checkGroupTeamFinishState(elemTeam); return true;
            }
            elemTeam.classList.add(this.groupsTeamSecondClass);
            // this.selectedGroupTeams[groupIndex][1] = elemTeam;
            this.addSelectedGroupTeam(groupIndex, 1, elemTeam);
            this.checkGroupTeamFinishState(elemTeam); return true;
        }
        if (selectSecond){
            if (elemTeam.classList.contains(this.groupsTeamSecondClass)){
                elemTeam.classList.remove(this.groupsTeamSecondClass);
                // this.selectedGroupTeams[groupIndex][1] = false;
                this.addSelectedGroupTeam(groupIndex, 1, false);
                this.checkGroupTeamFinishState(elemTeam); return true;
            }
            elemTeam.classList.add(this.groupsTeamFirstClass);
            // this.selectedGroupTeams[groupIndex][0] = elemTeam;
            this.addSelectedGroupTeam(groupIndex, 0, elemTeam);
            this.checkGroupTeamFinishState(elemTeam); return true;
        }
        elemTeam.classList.add(this.groupsTeamFirstClass);
        // this.selectedGroupTeams[groupIndex][0] = elemTeam;
        this.addSelectedGroupTeam(groupIndex, 0, elemTeam);

        this.checkGroupTeamFinishState(elemTeam); return true;
        // this.checkGroupTeamFinishState(elemTeam);
        // console.debug('selectedGroupTeams:');
        // console.debug(this.selectedGroupTeams);

    }

    addGroupEvents(){
        if (!this.groupsItems) return;
        var _this = this;
        this.groupsItems.forEach(function (group){
            var teams = group.querySelectorAll('.b-group__row');
            if (teams.length){
                teams.forEach(function (team){
                    team.addEventListener('click',_this.selectGroupTeam.bind(_this));
                }.bind(_this));
            }
        }.bind(_this));
    }


    addGridTeamsEvents(){
        if (!this.listGrid) return;
        var _this = this;
        this.listGrid.querySelectorAll('.'+this.gridTeamClass).forEach(function (team){
            team.addEventListener('click',_this.selectGridTeam.bind(_this));
        }.bind(_this));
    }

    selectGridTeam(e){
        var elem = e.currentTarget;
        var parent = elem.closest('.'+this.gridTeamGroupClass);
        var parentColumn = elem.closest('.'+this.listGridColumnClass);
        var activeElem = parent.querySelector('.'+this.gridTeamClass+'.is-active');
        var teams = parent.querySelectorAll('.'+this.gridTeamClass);
        var teamIds = teams.map((el) => el.dataset.teamId);
        // console.debug('teamIds: ',teamIds);

        if (!elem.dataset.teamId) return;

        this.clearNextColumns(elem, elem, teamIds);
        if (!this.checkSelectedTeamInGroup(parent)) return;


        if (elem.classList.contains('is-active')){
            elem.classList.remove('is-active');
            this.checkGridColumns();

            this.updateNextGridTeam(elem);
            this.clearNextColumns(elem, elem, teamIds);
            return;
        } else {
            elem.classList.add('is-active');
        }
        if (activeElem && activeElem !== elem){
            activeElem.classList.remove('is-active');
        }

        if (parentColumn.classList.contains(this.gridItemFinalClass)){
            // console.debug('This is the end!!!, select finale winner');
            if (this.checkFinalists()){
                document.querySelector('.popup-app-final').classList.add('open');
                console.debug('Winners selected');
                this.winnerTeam(elem);
            } else {
                // console.debug('Select other winner');
            }
        }


        this.updateNextGridTeam(elem);

        this.checkGridColumns();
    }

    checkGridColumns(){
        var _this = this;
        var leftColumns = this.listGrid.querySelectorAll('.'+this.listGridColumnClass+'.'+this.gridItemLeftClass);

        var openColumn = this.listGrid.querySelector('.'+this.listGridColumnClass+'.is-open');
        // console.debug('openColumn: ',openColumn);
        var offset = openColumn.offsetLeft;
        this.listGrid.querySelectorAll('.'+this.listGridColumnClass).forEach(function (el, ind){
            if (ind > 0 && ind !== 6)
                el.classList.remove('is-open');
        });



        var leftRes = this._checkGridColumn(leftColumns, true);
        if (leftRes.indexOpenColumn !== -1){
            this._offsetToColumn(this, leftColumns, leftRes, true);
            return;
        }

        // go to right
        var rightColumns = this.listGrid.querySelectorAll('.'+this.listGridColumnClass+'.'+this.gridItemRightClass);
        var rightRes = this._checkGridColumn(rightColumns, false);
        if (rightRes.indexOpenColumn !== -1){
            this._offsetToColumn(this, rightColumns, rightRes, false);
            return;
        }

        // open finish state
        var finishColumn = this.listGrid.querySelector('.'+this.gridItemFinalClass);
        finishColumn.classList.add('is-open');

        if (!finishColumn.classList.contains('is-winner'))
            finishColumn.classList.add('final-completed');

        // console.log('final-completed');

        this._offsetToFinishColumn();

        // console.debug('leftRes indexOpenColumn: ',leftRes.indexOpenColumn);

    }


    _offsetToColumn(_this, leftColumns, leftRes, is_left){
        if (window > 767) return;
        setTimeout(function (){
            var offset = leftColumns[leftRes.indexOpenColumn].offsetLeft - leftColumns[0].offsetLeft;
            if (!is_left){
                // console.debug('leftRes.indexOpenColumn: ',leftRes.indexOpenColumn);
                offset = _this.listGrid.scrollLeft =  leftColumns[leftColumns.length-leftRes.indexOpenColumn-1].offsetLeft
                    +leftColumns[leftColumns.length-leftRes.indexOpenColumn-1].clientWidth - window.innerWidth
            }
            _this.listGrid.scroll({left: offset, behavior: 'smooth'}) ;
        }.bind(_this, leftColumns, leftRes), 400);
    }
    _offsetToFinishColumn(){
        if (window > 767) return;
        setTimeout(function () {
            var finish = this.listGrid.querySelector('.' + this.listGridColumnClass + '.' + this.gridItemFinalClass);
            var offset = finish.offsetLeft;
            if (finish.clientWidth < window.innerWidth) {
                offset = finish.offsetLeft - (window.innerWidth - finish.clientWidth) / 2;
            }
            this.listGrid.scroll({left: offset, behavior: 'smooth'}) ;
        }.bind(this), 400);
    }

    test(){
        document.querySelectorAll('.b-group__team').forEach(function(el){
            el.click();
        })
    }

    _checkGridColumn(columns, is_left = true){
        if (!columns.length) return;
        var countLeftSelected = 0;
        var indexOpenColumn = -1;

        for (var i = 0; i < columns.length; i++){
            var leftColumn = (is_left) ? columns[i] : columns[columns.length - i - 1] ;
            if (
                leftColumn.querySelectorAll('.'+this.gridTeamClass).length / 2
                === leftColumn.querySelectorAll('.'+this.gridTeamClass+'.is-active').length
            ){
                countLeftSelected ++ ;
                leftColumn.classList.remove('is-open');
                // console.debug('leftColumn full',leftColumn);
            } else {
                leftColumn.classList.add('is-open');
                // console.debug('leftColumn need open',leftColumn);
                indexOpenColumn = i;
                break;
            }
        }

        return {countLeftSelected, indexOpenColumn}
    }

    checkSelectedTeamInGroup(parent){
        var check = true;
        var teams = parent.querySelectorAll('.'+this.listGridColumnClass+' .'+this.gridTeamClass);
        teams.forEach(function (team){
            if (!team.dataset.teamId) check = false;
        });
        return check;
    }

    checkFinalists(){
        var check = true;
        var teams = this.listGrid.querySelectorAll('.'+this.listGridColumnClass+'.'+this.gridItemFinalClass+' .'+this.gridTeamClass);
        teams.forEach(function (team){
            if (!team.dataset.teamId) check = false;
        });
        return check;

    }

    getNextGridColumn(elem){
        var parentColumn = elem.closest('.'+this.listGridColumnClass);
        var parent = elem.closest('.'+this.gridTeamGroupClass);
        var nextColumn = false;

        var groupIndex = Array.prototype.slice.call( parentColumn.querySelectorAll('.'+this.gridTeamGroupClass)).indexOf(parent);

        if (parentColumn.classList.contains(this.gridItemLeftClass)){
            nextColumn = parentColumn.nextElementSibling;
            if (nextColumn && nextColumn.classList.contains(this.gridItemLeftClass) || nextColumn.classList.contains(this.gridItemFinalClass)){
            } else {
                nextColumn = false;
            }
        }
        if (parentColumn.classList.contains(this.gridItemRightClass)){
            nextColumn = parentColumn.previousElementSibling;
            if (nextColumn && nextColumn.classList.contains(this.gridItemRightClass) || nextColumn.classList.contains(this.gridItemFinalClass)){
            } else {
                nextColumn = false;
            }
        }
        return nextColumn;

    }

    updateNextGridTeam(elem){
        var parentColumn = elem.closest('.'+this.listGridColumnClass);
        var parent = elem.closest('.'+this.gridTeamGroupClass);
        var nextColumn = false;
        var is_left = false;

        var groupIndex = Array.prototype.slice.call( parentColumn.querySelectorAll('.'+this.gridTeamGroupClass)).indexOf(parent);
        // console.debug('groupIndex: ',groupIndex);

        nextColumn = this.getNextGridColumn(elem);
        if (nextColumn && parentColumn.classList.contains(this.gridItemLeftClass) && nextColumn.classList.contains(this.gridItemFinalClass)){
            is_left = true;
        }

        if (nextColumn){

            // console.debug('nextColumn', nextColumn);
            // console.debug('groupIndex: ',groupIndex);
            if (nextColumn.classList.contains(this.gridItemFinalClass)){
                groupIndex = (is_left) ? 0 : 1;
            } else {

            }
            var nextTeam = nextColumn.querySelectorAll('.'+this.gridTeamClass)[groupIndex];

            // this.clearNextColumns(nextTeam);
            // console.debug('nextTeam: ',nextTeam);
            this.setupTeamData(nextTeam, elem.dataset.teamId);
            // console.debug('elem.teamId: ',elem.dataset.teamId);
            // nextTeam.teamId = elem.teamId;
            // next
        }
    }

    winnerTeam(team){
        document.querySelector('.list-grid__col._final').classList.remove('final-completed');
        document.querySelector('.list-grid__col._final').classList.add('is-winner');
        document.querySelector('.popup-app-final').classList.add('open');
        document.querySelector('.__winner').textContent = team.dataset.fullName;
        document.querySelector('.__code').textContent = team.dataset.code;
    }

}


document.addEventListener('DOMContentLoaded', function(){
    var championGrid = new ChampionGrid();
    championGrid.initialize();
    window.championGrid = championGrid;
});

(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
    };
}(Element.prototype));
