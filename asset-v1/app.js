/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Shpongle", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 6668, this.bpm = 144, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "1_kick",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "2_shere",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "3_kosh",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "5_tom",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "6_masks",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "9_ukuleli",
        color: "828282",
        uniqsnd: !0
,   }, {
        name: "10_hat_eyes_drak",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "11_lefl_face_medoy",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "12_emerald_planet",
        color: "828282",
        uniqsnd: !0

    }, {
        name: "19_moai",
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [{

    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
