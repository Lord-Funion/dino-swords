"use strict";
(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        309: function(t, e, i) {
            t.exports = i.p + "fonts/dogicapixel.4c37d66.ttf"
        },
        310: function(t, e, i) {
            t.exports = i.p + "fonts/dogicapixelbold.d373f61.ttf"
        },
        311: function(t, e, i) {
            t.exports = i.p + "fonts/Roboto-Regular.3e1af3e.ttf"
        },
        312: function(t, e, i) {
            var o = i(329);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]), o.locals && (t.exports = o.locals), (0, i(30).default)("2e107364", o, !0, {
                sourceMap: !1
            })
        },
        328: function(t, e, i) {
            var o = i(312);
            i.n(o).a
        },
        329: function(t, e, i) {
            var o = i(29),
                r = i(251),
                s = i(309),
                n = i(310),
                a = i(311);
            e = o(!1);
            var l = r(s),
                c = r(n),
                p = r(a);
            e.push([t.i, "@font-face{font-family:DogicaPixel;src:url(" + l + ")}@font-face{font-family:DogicaPixelBold;src:url(" + c + ")}@font-face{font-family:RobotoRegular;src:url(" + p + ")}*{box-sizing:border-box}html{transition:background-color 1.5s cubic-bezier(.65,.05,.36,1);background-color:#fff}.inverted{background-color:#000}body{text-align:center;font-family:DogicaPixel;font-size:10px}strong{font-family:DogicaPixelBold}#main{justify-content:center;position:fixed;top:0;left:0;height:100%}#inner,#main{display:flex;width:100%}#inner{position:relative;justify-content:space-between;align-items:stretch;max-width:600px;min-height:100%;padding:0 20px 10px}#inner,#landscape{flex-direction:column}#landscape{display:none;justify-content:center;align-items:center;position:fixed;width:100%;height:100%;z-index:99999;background:#fff}#landscape img{margin-bottom:20px;width:50%}.mobile.landscape #landscape{display:flex}.mobile.landscape #landscape.highscore{display:none}#wrapper{position:relative;display:inline-block;width:100%;max-width:600px;transform-origin:top center;transition:-webkit-filter 1.5s cubic-bezier(.65,.05,.36,1);transition:filter 1.5s cubic-bezier(.65,.05,.36,1);transition:filter 1.5s cubic-bezier(.65,.05,.36,1),-webkit-filter 1.5s cubic-bezier(.65,.05,.36,1)}#wrapper div{transition:transform .25s cubic-bezier(.4,0,1,1) .4s}#click-area{left:0;height:100%;z-index:999}#click-area,#title-box{position:absolute;top:0;width:100%}#title-box{right:0;transition:opacity .25s linear;opacity:1;text-align:left;color:#5f6367}#title-box div{font-size:9px;margin-top:12px;margin-left:12px;line-height:13px}#title-box #mschf-logo{position:absolute;top:8px;right:8px}#title-box #mschf-logo img{width:40px}#title-box #dino-logo{position:absolute;top:50px;left:calc(50% - 132px);width:264px}.mobile #title-box #dino-logo{left:calc(50% - 100px);width:200px}#offline-resources{display:none}#weapon-description{display:flex;flex-direction:column;justify-content:center;align-items:center;flex-grow:1;width:100%;height:50px}#instructions{text-align:left;flex-grow:1;font-family:RobotoRegular;font-size:14px;color:#5f6367;line-height:1.5em}.desktop #instructions{font-size:16px;margin-top:10px}.desktop #instructions h3{font-size:18px;margin-bottom:10px}.desktop #instructions .red{color:red}#swipe-box{position:relative;flex-grow:1;color:#5f6367;margin-bottom:15px}#swipe-box,#swipe-box .arrow-button{display:flex;justify-content:center;align-items:center}#swipe-box .arrow-button{position:absolute;top:0;width:40px;height:100%}#swipe-box .arrow-button.left{justify-content:flex-start;left:0}#swipe-box .arrow-button.right{justify-content:flex-end;right:0}#swipe-box .arrow-button img{height:15px}#highscore-input{text-align:center;line-height:120%}#highscore-input .gray{color:#757575}#highscore-input input{border:none;border-bottom:1px solid #979797;margin:10px 0;width:100%;font-family:DogicaPixel;text-align:center;outline:none;padding-bottom:8px}#highscore-input ::-moz-placeholder{line-height:120%;opacity:1}#highscore-input :-ms-input-placeholder{line-height:120%;opacity:1}#highscore-input ::-ms-input-placeholder{line-height:120%;opacity:1}#highscore-input ::placeholder{line-height:120%;opacity:1}#highscore-input .button{position:relative;padding:1em;border:1px solid #979797;border-radius:10px;background:#e5e5e5;width:calc(100% - 20px);margin:5px 10px 0}.desktop #highscore-input{margin-left:50px;border-left:1px solid #979797;padding-left:50px}#app-blurb,#top-weapon{text-align:center;line-height:1.5em}#app-blurb a{display:inline-block;background:#ffc802;color:#5f6367;text-decoration:none;padding:1em}#app-blurb a,.border-box{position:relative;border:1px solid #979797;border-radius:10px}.border-box{font-size:0;margin-bottom:12px}.border-box .title-bar{position:relative;font-size:10px;color:#535353;top:-.5em}.border-box .title-bar .title{display:inline-block;padding:0 1em;background:#fff}.collapsed-box{position:relative;font-size:0;height:15px;display:flex;align-items:center;justify-content:center}.collapsed-box .line{width:100%;height:1px;background:#979797}.collapsed-box .title-bar{position:absolute;font-size:10px;color:#535353;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.collapsed-box .title-bar .title{display:inline-block;background:#fff;padding:0 10px}.collapsed-box .title-bar .title img{margin-bottom:1px}.mobile .collapsed-box{margin-bottom:10px}.corner{position:absolute;width:8px;height:8px;background-size:50%}.corner.top{top:-1px}.corner.bottom{bottom:-1px}.corner.right{right:-1px}.corner.left{left:-1px}#leaderboard{height:100px;overflow-y:auto;-webkit-overflow-scrolling:touch;font-size:10px;line-height:17px;color:#535353}#leaderboard .score{margin-bottom:8px}.desktop #leaderboard{height:150px}.desktop #leaderboard .score{display:inline-block;width:33%}.flip-flop{display:inline-block;height:25px;width:80%;margin-top:8px;margin-bottom:8px}.flip-flop,.flip-flop div{justify-content:center;align-items:center}.flip-flop div{display:inline-flex;font-size:9px;width:50%;height:100%}.flip-flop div:first-child{width:calc(50% - 1px);border-right:1px solid #979797}.flip-flop div.selected{background:#e5e5e5}#hourly{margin-bottom:5px}#armory-outer{position:relative;font-size:0;margin-bottom:15px}#armory,#armory-outer .title-bar{top:calc(-8px - .5em)}#armory{position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;height:110px}.desktop #armory{flex-direction:column;height:auto}#armory-icons{height:60px;top:calc(-8px - .5em);overflow-y:auto;-webkit-overflow-scrolling:touch}#armory-icons .icon{display:none;width:16.66667%;margin-bottom:5px;opacity:.3}#armory-icons .icon.found{display:inline-block;opacity:1}#armory-icons .icon img{width:24px}.empty{font-size:10px;color:#757575}.row{display:block}.mobile .row{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.mobile .row .arrow{height:15px;margin:10px}.key{position:relative;display:inline-block;width:45px;height:45px;margin:3px;border:1px solid #979797;border-radius:10px;font-size:10px;color:#767576;opacity:.3}.key.selected{background:#e5e5e5}.key.found{opacity:.3}.key.found .icon,.key.usable{opacity:1}.key .letter{position:absolute;top:8px;left:8px}.key .icon{display:inline-block;width:24px;height:24px;opacity:0}.key .icon img{width:100%;height:100%;-ms-interpolation-mode:nearest-neighbor;image-rendering:-moz-crisp-edges;image-rendering:pixelated}.desktop .key .icon{position:absolute;bottom:4px;right:4px}.mobile .key{display:inline-flex;align-items:center;justify-content:center;width:100px;height:100px}.mobile .key .icon{width:48px;height:48px;opacity:1}@-webkit-keyframes blink{0%{background:#e5e5e5}50%{background:#d5d5d5}to{background:#e5e5e5}}@keyframes blink{0%{background:#e5e5e5}50%{background:#d5d5d5}to{background:#e5e5e5}}.big-button{display:flex;align-items:center;justify-content:center;position:relative;height:60px;border:1px solid #979797;border-radius:10px;background:#e5e5e5;padding-top:.15em;font-size:20px;color:#535353}.big-button.blink{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:blink;animation-name:blink;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}#footer{display:flex;text-align:center;line-height:1.5em;font-size:9px;margin-top:15px;margin-bottom:10px}#footer a{position:relative;display:inline-block;background:#ffc802;color:#5f6367;text-decoration:none;padding:.5em;border:1px solid #979797;border-radius:10px;white-space:nowrap}", ""]), t.exports = e
        },
        332: function(t, e, i) {
            i.r(e), i(32), i(252), i(31), i(14), i(66);
            var o = {
                    components: {},
                    data: function() {
                        return {
                            gameState: 0,
                            showArmory: !1,
                            showLeaderboard: !0,
                            desktop: !1,
                            mobile: !1,
                            allWeaponStates: [],
                            weaponsFound: 0,
                            currentWeapon: null,
                            mobileWeaponIndex: 1,
                            mobileThreeWeapons: [null, null, null],
                            topWeapon: null,
                            leaderboardSection: 0,
                            swipeSection: 0,
                            keyRows: [],
                            gotHighscore: !1,
                            name: "",
                            email: "",
                            sendStatus: 0,
                            allTimeScores: [],
                            dailyScores: []
                        }
                    },
                    mounted: function() {
                        var o = this;
                        setupDinoSwords(), this.getScores(), weaponManager.updateCallback = this.buildWeaponList, window.addEventListener("keydown", function(t) {
                            o.gotHighscore && 13 == t.keyCode && o.postScore()
                        }), runner.gameOverCallback = function() {
                            o.getScores(), o.topWeapon = null;
                            var i = 0;
                            window.r = "r" + 1e8 * Math.random(), window[window.r + "a"] = runner.score, window[window.r + "b"] = runner.record, Object.keys(weaponUseCount).forEach(function(t) {
                                var e = weaponUseCount[t];
                                i < e && (o.topWeapon = weaponManager.weapons[t], i = e)
                            }), o.buildWeaponStates(), o.gameState = 2, o.showArmory = !0, o.showLeaderboard = !1, o.swipeSection = 1, o.sendStatus = 0, o.gotHighscore = !1
                        }, runner.gameStartCallback = function() {
                            o.currentWeapon = null, o.gameState = 1, o.showArmory = !0, o.showLeaderboard = !1, o.mobileWeaponIndex = 1, o.mobileThreeWeapons = [null, null, null]
                        };
                        var t = Detectizr.device.type;
                        navigator.maxTouchPoints && 2 < navigator.maxTouchPoints && /MacIntel/.test(navigator.platform) && (t = "mobile", document.documentElement.classList.remove("desktop"), document.documentElement.classList.add("mobile")), this.desktop = "desktop" == t, this.mobile = "mobile" == t, this.buildWeaponStates()
                    },
                    methods: {
                        buildWeaponStates: function() {
                            var o = [];
                            "qwertyuiopasdfghjklzxcvbnm".split("").forEach(function(t) {
                                var e = keyMap[t],
                                    i = {
                                        id: e,
                                        name: weaponConfigsById[e].name,
                                        found: !1
                                    };
                                weaponManager.weapons[e] && (i.found = !0), o.push(i)
                            }), this.allWeaponStates = o
                        },
                        buildWeaponList: function(t) {
                            var e, s, i, o, r, n, a, l = this;
                            this.desktop && (e = [], s = 0, ["qwertyuiop", "asdfghjkl", "zxcvbnm"].forEach(function(t) {
                                var r = [];
                                t.split("").forEach(function(t) {
                                    var e = keyMap[t],
                                        i = weaponManager.weapons[e],
                                        o = {
                                            letter: t,
                                            id: e,
                                            found: !1,
                                            usable: !1
                                        };
                                    i && (o.found = !0, s++, (i.unlimited || i.uses || 0 < i.maxTime - i.timeUsed) && (o.usable = !0)), r.push(o)
                                }), e.push(r)
                            }), weaponManager.currentWeapon && (this.currentWeapon = weaponManager.currentWeapon), this.weaponsFound = s, this.keyRows = e), this.mobile && (i = Object.keys(weaponManager.weapons), o = 0, i.forEach(function(t) {
                                weaponManager.weapons[t] && o++
                            }), t ? (n = !1, this.mobileThreeWeapons.forEach(function(t, e) {
                                t ? n = !0 : r = e
                            }), n ? null != r && (this.mobileWeaponIndex = r) : this.mobileWeaponIndex = 1, this.mobileThreeWeapons[this.mobileWeaponIndex] = t, this.mobileWeaponIndex = (this.mobileWeaponIndex + 1) % 3, this.currentWeapon = t) : this.currentWeapon = weaponManager.currentWeapon, this.mobileThreeWeapons.forEach(function(t, e) {
                                var i;
                                t && !t.isUsable() && ((i = l.mobileThreeWeapons.slice(0, 3))[e] = null, l.mobileThreeWeapons = i)
                            }), a = this.mobileThreeWeapons.slice(0, 3), this.mobileThreeWeapons = a, this.weaponsFound = o)
                        },
                        jumpButtonDown: function(t) {
                            t.preventDefault(), runner.onKeyDown({
                                keyCode: 38,
                                preventDefault: function() {}
                            })
                        },
                        jumpButtonUp: function(t) {
                            t.preventDefault(), runner.onKeyUp({
                                keyCode: 38,
                                preventDefault: function() {}
                            })
                        },
                        weaponButtonDown: function(t, e) {
                            t.preventDefault(), !e || e && (weaponManager.key = reverseKeyBindings[e.id])
                        },
                        weaponButtonUp: function(t) {
                            t.preventDefault(), weaponManager.key = null
                        },
                        swipeSwipe: function(t) {
                            var e = this.swipeSection;
                            "left" == t ? e++ : "right" == t && e--, this.gotHighscore ? (e < 0 && (e = 2), this.swipeSection = e % 3) : (e < 0 && (e = 1), this.swipeSection = e % 2)
                        },
                        getScores: function() {
                            var e = this,
                                i = new XMLHttpRequest;
                            i.addEventListener("readystatechange", function() {
                                if (4 == i.readyState) {
                                    var t;
                                    try {
                                        t = JSON.parse(i.responseText)
                                    } catch (t) {}
                                    t && (t.allTime && (e.allTimeScores = t.allTime), t.daily && (e.dailyScores = t.daily))
                                }
                            }), i.open("GET", "".concat("https://j2dodm950k.execute-api.us-east-1.amazonaws.com/dev", "/scores")), i.send()
                        },
                        postScore: function() {
                            var t = this;
                            0 != this.sendStatus && 2 != this.sendStatus || (this.sendStatus = 1, setTimeout(function() {
                                t.sendStatus = 2
                            }, 500))
                        },
                        toggleArmory: function(t) {
                            t.preventDefault(), this.showArmory = !this.showArmory, this.showLeaderboard = !this.showArmory
                        },
                        toggleLeaderboard: function(t) {
                            t.preventDefault(), this.showLeaderboard = !this.showLeaderboard, this.showArmory = !this.showLeaderboard
                        }
                    }
                },
                r = (i(328), i(19)),
                s = Object(r.a)(o, function() {
                    var i = this,
                        t = i.$createElement,
                        o = i._self._c || t;
                    return o("div", {
                        attrs: {
                            id: "main"
                        }
                    }, [o("div", {
                        class: {
                            highscore: 2 == i.swipeSection
                        },
                        attrs: {
                            id: "landscape"
                        }
                    }, [o("img", {
                        attrs: {
                            src: "images/title.png",
                            id: "dino-logo"
                        }
                    }), i._v(" "), i._m(0)]), i._v(" "), o("div", {
                        attrs: {
                            id: "inner"
                        }
                    }, [o("div", {
                        attrs: {
                            id: "wrapper"
                        }
                    }, [i.desktop ? o("div", {
                        attrs: {
                            id: "click-area"
                        },
                        on: {
                            mousedown: i.jumpButtonDown,
                            mouseup: i.jumpButtonUp
                        }
                    }) : i._e()]), i._v(" "), o("div", {
                        attrs: {
                            id: "title-box"
                        }
                    }, [i._m(1), i._v(" "), 0 == i.gameState ? o("a", {
                        attrs: {
                            href: "https://mschf.com/dinoswords",
                            target: "_blank",
                            id: "mschf-logo"
                        }
                    }, [o("img", {
                        attrs: {
                            src: "images/mschf-logo.png"
                        }
                    })]) : i._e(), i._v(" "), o("img", {
                        attrs: {
                            src: "images/title.png",
                            id: "dino-logo"
                        }
                    })]), i._v(" "), 1 == i.gameState ? o("div", {
                        attrs: {
                            id: "weapon-description"
                        }
                    }, [o("strong", {
                        attrs: {
                            id: "current-weapon"
                        }
                    }, [i._v(i._s((i.currentWeapon || {}).name))]), o("br"), o("br"), i._v("\n            " + i._s((i.currentWeapon || {}).flavor) + "\n        ")]) : i._e(), i._v(" "), 0 == i.gameState ? o("div", {
                        attrs: {
                            id: "instructions"
                        }
                    }, [i.desktop ? o("h3", [i._v("Welcome to Dino Swords")]) : i._e(), i._v("\n            How to play:\n            "), o("ul", [o("li", [i._v("Find and use up to 26 different weapons")]), i._v(" "), o("li", [i._v("Compete for the highscore on the global leaderboard")]), i._v(" "), o("li", [i._v("Highest score after one week wins a prize 🤫")]), i._v(" "), i.mobile ? o("li", [i._v("Tap play to begin")]) : i._e(), i._v(" "), i.desktop ? o("li", {
                        staticClass: "red"
                    }, [i._v("PRESS SPACE TO BEGIN")]) : i._e()])]) : i._e(), i._v(" "), 2 == i.gameState ? o("div", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:swipe",
                            value: i.swipeSwipe,
                            expression: "swipeSwipe",
                            arg: "swipe"
                        }],
                        attrs: {
                            id: "swipe-box"
                        }
                    }, [i.mobile ? o("div", {
                        staticClass: "arrow-button left",
                        on: {
                            touchstart: function() {
                                return i.swipeSwipe("right")
                            }
                        }
                    }, [o("img", {
                        attrs: {
                            src: "/images/left-arrow.png"
                        }
                    })]) : i._e(), i._v(" "), 0 == i.swipeSection || i.desktop ? o("div", {
                        attrs: {
                            id: "top-weapon"
                        }
                    }, [o("div", [i.topWeapon ? o("img", {
                        attrs: {
                            src: "/images/icons2/" + i.topWeapon.id + ".png"
                        }
                    }) : i._e()]), i._v(" "), i._m(2), i._v(" "), o("div", [i._v(i._s(i.topWeapon ? i.topWeapon.name.toUpperCase() : "NONE"))])]) : i._e(), i._v(" "), 1 == i.swipeSection && i.mobile ? o("div", {
                        attrs: {
                            id: "app-blurb"
                        }
                    }, [i._m(3), i._v(" "), i._m(4), i._v(" "), o("br"), i._v(" "), o("div", [i._v("Download the MSCHF app to")]), i._v(" "), o("div", [i._v("get access to future drops.")]), i._v(" "), o("br"), i._v(" "), i._m(5)]) : i._e(), i._v(" "), 2 == i.swipeSection ? o("div", {
                        attrs: {
                            id: "highscore-input"
                        }
                    }, [i._m(6), i._v(" "), i._m(7), i._v(" "), o("div", [o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: i.name,
                            expression: "name"
                        }],
                        ref: "nameInput",
                        attrs: {
                            maxlength: "15",
                            placeholder: "name"
                        },
                        domProps: {
                            value: i.name
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (i.name = t.target.value)
                            }
                        }
                    })]), i._v(" "), o("div", [o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: i.email,
                            expression: "email"
                        }],
                        ref: "emailInput",
                        attrs: {
                            placeholder: "email"
                        },
                        domProps: {
                            value: i.email
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (i.email = t.target.value)
                            }
                        }
                    })]), i._v(" "), o("div", {
                        staticClass: "button",
                        on: {
                            click: i.postScore
                        }
                    }, [0 == i.sendStatus ? o("strong", [i._v("ENTER")]) : i._e(), i._v(" "), 1 == i.sendStatus ? o("strong", [i._v("SENDING...")]) : i._e(), i._v(" "), 2 == i.sendStatus ? o("strong", [i._v("TRY AGAIN")]) : i._e(), i._v(" "), 3 == i.sendStatus ? o("img", {
                        attrs: {
                            src: "images/check.png"
                        }
                    }) : i._e(), i._v(" "), o("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    })])]) : i._e(), i._v(" "), i.mobile ? o("div", {
                        staticClass: "arrow-button right",
                        on: {
                            touchstart: function() {
                                return i.swipeSwipe("left")
                            }
                        }
                    }, [o("img", {
                        attrs: {
                            src: "/images/right-arrow.png"
                        }
                    })]) : i._e()]) : i._e(), i._v(" "), i.showLeaderboard ? o("div", {
                        staticClass: "border-box"
                    }, [i._m(8), i._v(" "), o("div", {
                        directives: [{
                            name: "scroll-lock",
                            rawName: "v-scroll-lock",
                            value: !0,
                            expression: "true"
                        }],
                        attrs: {
                            id: "leaderboard"
                        }
                    }, [o("div", {
                        staticClass: "flip-flop border-box"
                    }, [o("div", {
                        class: {
                            selected: 0 == i.leaderboardSection
                        },
                        on: {
                            click: function() {
                                i.leaderboardSection = 0
                            }
                        }
                    }, [o("strong", [i._v("ALL TIME")])]), i._v(" "), o("div", {
                        class: {
                            selected: 1 == i.leaderboardSection
                        },
                        on: {
                            click: function() {
                                i.leaderboardSection = 1
                            }
                        }
                    }, [o("strong", [i._v("DAILY")])]), i._v(" "), o("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    })]), i._v(" "), i._m(9), i._v(" "), i._l([i.allTimeScores, i.dailyScores][i.leaderboardSection], function(t) {
                        return o("div", {
                            staticClass: "score"
                        }, [o("div", [o("strong", [i._v("#" + i._s(t.position + 1))])]), i._v(" "), o("div", [o("strong", [i._v(i._s(t.name))])]), i._v(" "), o("div", {
                            staticClass: "number"
                        }, [i._v(i._s(t.points))])])
                    })], 2), i._v(" "), o("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    })]) : i._e(), i._v(" "), 0 == i.gameState || i.showArmory ? i._e() : o("div", {
                        staticClass: "collapsed-box",
                        on: {
                            click: i.toggleArmory
                        }
                    }, [o("div", {
                        staticClass: "line"
                    }), i._v(" "), i._m(10)]), i._v(" "), i.showArmory ? o("div", {
                        staticClass: "border-box",
                        attrs: {
                            id: "armory-outer"
                        }
                    }, [o("div", {
                        staticClass: "title-bar"
                    }, [o("div", {
                        staticClass: "title"
                    }, [o("strong", [i._v("THE ARMORY")]), o("br"), o("br"), i._v(i._s(i.weaponsFound) + "/26 FOUND")])]), i._v(" "), 1 == i.gameState || i.desktop ? o("div", {
                        attrs: {
                            id: "armory"
                        }
                    }, [i._l(i.keyRows, function(t) {
                        return i.desktop ? o("div", {
                            staticClass: "row"
                        }, i._l(t, function(t) {
                            return o("div", {
                                staticClass: "key",
                                class: {
                                    found: t.found, usable: t.usable
                                }
                            }, [o("strong", {
                                staticClass: "letter"
                            }, [i._v(i._s(t.letter.toUpperCase()))]), i._v(" "), o("div", {
                                staticClass: "icon"
                            }, [o("img", {
                                attrs: {
                                    src: "images/icons2/" + t.id + ".png"
                                }
                            })]), i._v(" "), o("img", {
                                staticClass: "corner top left",
                                attrs: {
                                    src: "images/top-left-corner.gif"
                                }
                            }), i._v(" "), o("img", {
                                staticClass: "corner top right",
                                attrs: {
                                    src: "images/top-right-corner.gif"
                                }
                            }), i._v(" "), o("img", {
                                staticClass: "corner bottom left",
                                attrs: {
                                    src: "images/bottom-left-corner.gif"
                                }
                            }), i._v(" "), o("img", {
                                staticClass: "corner bottom right",
                                attrs: {
                                    src: "images/bottom-right-corner.gif"
                                }
                            })])
                        }), 0) : i._e()
                    }), i._v(" "), !i.mobile || i.mobileThreeWeapons[0] || i.mobileThreeWeapons[1] || i.mobileThreeWeapons[2] ? i._e() : o("span", {
                        staticClass: "empty"
                    }, [i._v("[ARMORY EMPTY]")]), i._v(" "), i.mobile && (i.mobileThreeWeapons[0] || i.mobileThreeWeapons[1] || i.mobileThreeWeapons[2]) ? o("div", {
                        staticClass: "row"
                    }, i._l(i.mobileThreeWeapons, function(e) {
                        return o("div", {
                            staticClass: "key",
                            style: {
                                opacity: e ? 1 : 0
                            },
                            on: {
                                touchstart: function(t) {
                                    return i.weaponButtonDown(t, e)
                                },
                                touchend: function(t) {
                                    return i.weaponButtonUp(t, e)
                                }
                            }
                        }, [o("div", {
                            staticClass: "icon"
                        }, [e ? o("img", {
                            attrs: {
                                src: "/images/icons2/" + e.id + ".png"
                            }
                        }) : i._e()]), i._v(" "), o("img", {
                            staticClass: "corner top left",
                            attrs: {
                                src: "images/top-left-corner.gif"
                            }
                        }), i._v(" "), o("img", {
                            staticClass: "corner top right",
                            attrs: {
                                src: "images/top-right-corner.gif"
                            }
                        }), i._v(" "), o("img", {
                            staticClass: "corner bottom left",
                            attrs: {
                                src: "images/bottom-left-corner.gif"
                            }
                        }), i._v(" "), o("img", {
                            staticClass: "corner bottom right",
                            attrs: {
                                src: "images/bottom-right-corner.gif"
                            }
                        })])
                    }), 0) : i._e()], 2) : i._e(), i._v(" "), i.mobile && 2 == i.gameState ? o("div", {
                        directives: [{
                            name: "scroll-lock",
                            rawName: "v-scroll-lock",
                            value: !0,
                            expression: "true"
                        }],
                        attrs: {
                            id: "armory-icons"
                        }
                    }, i._l(i.allWeaponStates, function(t) {
                        return o("div", {
                            staticClass: "icon",
                            class: {
                                found: t.found
                            }
                        }, [o("img", {
                            attrs: {
                                src: "/images/icons2/" + t.id + ".png"
                            }
                        })])
                    }), 0) : i._e(), i._v(" "), o("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    })]) : i._e(), i._v(" "), i.showLeaderboard ? i._e() : o("div", {
                        staticClass: "collapsed-box",
                        on: {
                            click: i.toggleLeaderboard
                        }
                    }, [o("div", {
                        staticClass: "line"
                    }), i._v(" "), i._m(11)]), i._v(" "), i.mobile ? o("div", {
                        staticClass: "big-button",
                        class: {
                            blink: 0 == i.gameState || 2 == i.gameState
                        },
                        on: {
                            touchstart: i.jumpButtonDown,
                            touchend: i.jumpButtonUp
                        }
                    }, [o("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), i._v(" "), o("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    }), i._v(" "), o("strong", [i._v(i._s(["PLAY", "Jump", "PLAY AGAIN"][i.gameState]))])]) : i._e(), i._v(" "), i.desktop ? o("div", {
                        attrs: {
                            id: "footer"
                        }
                    }, [i._m(12), i._v(" "), o("div", [i._v("Download the MSCHF app to get access to future drops.")]), i._v(" "), i._m(13)]) : i._e(), i._v(" "), i._m(14)])])
                }, [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("p", [e("strong", [this._v("ROTATE YOUR DEVICE")]), e("br"), this._v("\n            Dino Swords is only playable in portrait mode.\n        ")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", [this._v("DINO SWORDS")]), e("br"), this._v("\n                BY MSCHF X 100 THIEVES\n            ")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", [this._v("TOP USED WEAPON")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", [this._v("DINO SWORDS IS")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", [this._v("MSCHF DROP #28")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://mschf.com/dinoswords",
                            target: "_blank"
                        }
                    }, [e("strong", [this._v("GET THE MSCHF APP")]), this._v(" "), e("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), this._v(" "), e("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), this._v(" "), e("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), this._v(" "), e("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", [this._v("ENTER NAME AND EMAIL")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", {
                        staticClass: "gray"
                    }, [this._v("TO LOG YOUR SCORE")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "title-bar"
                    }, [e("div", {
                        staticClass: "title"
                    }, [e("strong", [this._v("LEADERBOARD")])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        attrs: {
                            id: "hourly"
                        }
                    }, [e("strong", [this._v("SCORES ARE LOCKED")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "title-bar"
                    }, [e("div", {
                        staticClass: "title"
                    }, [e("strong", [this._v("THE ARMORY")]), this._v(" "), e("img", {
                        attrs: {
                            src: "images/down-arrow.png"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "title-bar"
                    }, [e("div", {
                        staticClass: "title"
                    }, [e("strong", [this._v("LEADERBOARD")]), this._v(" "), e("img", {
                        attrs: {
                            src: "images/down-arrow.png"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("strong", [this._v("DINO SWORDS IS MSCHF DROP #28")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("a", {
                        attrs: {
                            href: "https://mschf.com/dinoswords",
                            target: "_blank"
                        }
                    }, [e("strong", [this._v("GET THE MSCHF APP")]), this._v(" "), e("img", {
                        staticClass: "corner top left",
                        attrs: {
                            src: "images/top-left-corner.gif"
                        }
                    }), this._v(" "), e("img", {
                        staticClass: "corner top right",
                        attrs: {
                            src: "images/top-right-corner.gif"
                        }
                    }), this._v(" "), e("img", {
                        staticClass: "corner bottom left",
                        attrs: {
                            src: "images/bottom-left-corner.gif"
                        }
                    }), this._v(" "), e("img", {
                        staticClass: "corner bottom right",
                        attrs: {
                            src: "images/bottom-right-corner.gif"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        attrs: {
                            id: "offline-resources"
                        }
                    }, [e("img", {
                        attrs: {
                            id: "offline-resources-1x",
                            src: "images/default_100_percent/offline/100-offline-sprite.png"
                        }
                    }), this._v(" "), e("img", {
                        attrs: {
                            id: "offline-resources-2x",
                            src: "images/default_200_percent/offline/200-offline-sprite.png"
                        }
                    })])
                }], !1, null, null, null);
            e.default = s.exports
        }
    }
]);