"use strict";

function asyncGeneratorStep(n, p, e, _, r, g, t) {
    try {
        var a = n[g](t),
            o = a.value
    } catch (n) {
        return void e(n)
    }
    a.done ? p(o) : Promise.resolve(o).then(_, r)
}

function _asyncToGenerator(a) {
    return function() {
        var n = this,
            t = arguments;
        return new Promise(function(p, e) {
            var _ = a.apply(n, t);

            function r(n) {
                asyncGeneratorStep(_, p, e, r, g, "next", n)
            }

            function g(n) {
                asyncGeneratorStep(_, p, e, r, g, "throw", n)
            }
            r(void 0)
        })
    }
}
var runner, armoryElement, currentWeaponElement, keyMap = {
        q: "sword",
        w: "handgun",
        e: "flipflop",
        r: "flamethrower",
        t: "shuriken",
        y: "scream",
        u: "chainsaw",
        i: "helicopter",
        o: "halberd",
        p: "kick",
        a: "cig",
        s: "rifle",
        d: "double",
        f: "salute",
        g: "holywater",
        h: "portal",
        j: "grenade",
        k: "downers",
        l: "uppers",
        z: "meteor",
        x: "laser",
        c: "chem",
        v: "bat",
        b: "bow",
        n: "tank",
        m: "hammer"
    },
    imageFilenames = "bat_0.png\nbat_1.png\nbat_2.png\nbat_3.png\nbat_still.png\nblank.gif\nbow_0.png\nbow_1.png\nbow_2.png\ncacti1_bat_0.png\ncacti1_bat_1.png\ncacti1_bow_0.png\ncacti1_flame_0.png\ncacti1_flame_1.png\ncacti1_flipflop_0.png\ncacti1_grenade_0.png\ncacti1_grenade_1.png\ncacti1_gun_0.png\ncacti1_gun_1.png\ncacti1_hammer_0.png\ncacti1_holy_0.png\ncacti1_holy_1.png\ncacti1_meteor_0.png\ncacti1_meteor_1.png\ncacti1_normal_0.png\ncacti1_shuriken_0.png\ncacti1_sword_0.png\ncacti1_tank_0.png\ncacti2_bat_0.png\ncacti2_bat_1.png\ncacti2_bow_0.png\ncacti2_flame_0.png\ncacti2_flame_1.png\ncacti2_flipflop_0.png\ncacti2_grenade_0.png\ncacti2_grenade_1.png\ncacti2_gun_0.png\ncacti2_gun_1.png\ncacti2_hammer_0.png\ncacti2_holy_0.png\ncacti2_holy_1.png\ncacti2_meteor_0.png\ncacti2_meteor_1.png\ncacti2_normal_0.png\ncacti2_shuriken_0.png\ncacti2_sword_0.png\ncacti2_tank_0.png\ncancer.png\nchainsaw_0.png\nchainsaw_1.png\nchem_cloud_0.png\nchem_cloud_1.png\nchem_plane_0.png\nchem_plane_1.png\ncig_off_0.png\ncig_off_1.png\ncig_on_0.png\ncig_on_1.png\ndino_scream_0.png\ndino_scream_1.png\ndouble_0.png\ndouble_1.png\ndouble_death.png\ndown-arrow.png\nflamethrower_0.png\nflamethrower_1.png\nflamethrower_2.png\nflipflop_0.png\nflipflop_1.png\nflipflop_2.png\nflipflop_3.png\ngrenade.png\ngrenade_0.png\ngrenade_1.png\ngrenade_2.png\ngrenade_3.png\nhalberd_0.png\nhalberd_1.png\nhalberd_2.png\nhammer_0.png\nhammer_1.png\nhandgun_0.png\nhandgun_1.png\nhandgun_2.png\nhandgun_3.png\nhelicopter_entry_0.png\nhelicopter_entry_1.png\nhelicopter_entry_2.png\nhelicopter_entry_3.png\nhelicopter_entry_4.png\nhelicopter_entry_5.png\nhelicopter_entry_6.png\nhelicopter_entry_7.png\nhelicopter_entry_8.png\nhelicopter_fly_0.png\nhelicopter_fly_1.png\nhelicopter_shoot_0.png\nhelicopter_shoot_1.png\nholywater_0.png\nholywater_1.png\nholywater_2.png\nkey-border.png\nkick_0.png\nkick_1.png\nlaser_gun.png\nleft-arrow.png\nmeteor_crash_0.png\nmeteor_crash_1.png\nmeteor_fall_0.png\nmeteor_fall_1.png\nportal_entrance_0.png\nportal_entrance_1.png\nportal_entrance_2.png\nportal_exit_0.png\nportal_exit_1.png\nportal_exit_2.png\nportal_gun.png\nportal_ray_0.png\nportal_ray_1.png\nptero_bat_0.png\nptero_bat_1.png\nptero_bow_0.png\nptero_bow_1.png\nptero_flame_0.png\nptero_flame_1.png\nptero_flame_2.png\nptero_flame_3.png\nptero_grenade_0.png\nptero_grenade_1.png\nptero_gun_0.png\nptero_gun_1.png\nptero_gun_2.png\nptero_gun_3.png\nptero_hammer_0.png\nptero_hammer_1.png\nptero_holy_0.png\nptero_holy_1.png\nptero_meteor_0.png\nptero_meteor_1.png\nptero_meteor_2.png\nptero_meteor_3.png\nptero_normal_0.png\nptero_normal_1.png\nptero_shuriken_0.png\nptero_shuriken_1.png\nptero_sword_0.png\nptero_sword_1.png\npurple_0_0.png\npurple_0_1.png\npurple_10_0.png\npurple_10_1.png\npurple_11_0.png\npurple_11_1.png\npurple_1_0.png\npurple_1_1.png\npurple_2_0.png\npurple_2_1.png\npurple_3_0.png\npurple_3_1.png\npurple_4_0.png\npurple_4_1.png\npurple_5_0.png\npurple_5_1.png\npurple_6_0.png\npurple_6_1.png\npurple_7_0.png\npurple_7_1.png\npurple_8_0.png\npurple_8_1.png\npurple_9_0.png\npurple_9_1.png\nrifle_0.png\nrifle_1.png\nrifle_2.png\nright-arrow.png\nsalute_0.png\nsalute_1.png\nshuriken_0.png\nshuriken_1.png\nshuriken_2.png\nshuriken_3.png\nsword_0.png\nsword_1.png\ntank_0.png\ntank_1.png\ntank_2.png\ntank_3.png\ntank_4.png\ntank_5.png\ntank_6.png\ntank_7.png\nicons2/bat.png\nicons2/bow.png\nicons2/chainsaw.png\nicons2/chem.png\nicons2/cig.png\nicons2/double.png\nicons2/downers.png\nicons2/flamethrower.png\nicons2/flipflop.png\nicons2/grenade.png\nicons2/halberd.png\nicons2/hammer.png\nicons2/handgun.png\nicons2/helicopter.png\nicons2/holywater.png\nicons2/kick.png\nicons2/laser.png\nicons2/meteor.png\nicons2/portal.png\nicons2/rifle.png\nicons2/salute.png\nicons2/scream.png\nicons2/shuriken.png\nicons2/sword.png\nicons2/tank.png\nicons2/uppers.png".split("\n");

function asyncForEach(n, p) {
    return _asyncForEach.apply(this, arguments)
}

function _asyncForEach() {
    return (_asyncForEach = _asyncToGenerator(regeneratorRuntime.mark(function n(p, e) {
        var _;
        return regeneratorRuntime.wrap(function(n) {
            for (;;) switch (n.prev = n.next) {
                case 0:
                    _ = 0;
                case 1:
                    if (_ < p.length) return n.next = 4, e(p[_]);
                    n.next = 7;
                    break;
                case 4:
                    _++, n.next = 1;
                    break;
                case 7:
                case "end":
                    return n.stop()
            }
        }, n)
    }))).apply(this, arguments)
}

function setupDinoSwords() {
    runner = new Runner("#wrapper")
}
window.addEventListener("load", function() {
    setTimeout(function() {
        asyncForEach(imageFilenames, function(e) {
            return new Promise(function(n, p) {
                loadImage("/images/".concat(e)).addEventListener("load", n), setTimeout(n, 100)
            })
        })
    }, 500)
}), window.debug = !1;