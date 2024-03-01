

const tiangan = "甲乙丙丁戊己庚辛壬癸"; // 天干
const dizhi = "子丑寅卯辰巳午未申酉戌亥"; // 地支

/*
根据出生日子的天干，通过下表来查算时辰干支：
时辰干支查算表
时间时辰                           五行纪日干支
                   甲己      乙庚      丙辛      丁壬      戊癸
23－01 子/水       甲子      丙子      戊子      庚子      壬子
01－03 丑/土       乙丑      丁丑      己丑      辛丑      癸丑
03－05 寅/木       丙寅      戊寅      庚寅      壬寅      甲寅
05－07 卯/木       丁卯      己卯      辛卯      癸卯      乙卯
07－09 辰/土       戊辰      庚辰      壬辰      甲辰      丙辰
09－11 巳/火       己巳      辛巳      癸巳      己巳      丁巳
11－13 午/火       庚午      壬午      甲午      丙午      戊午
13－15 未/土       辛未      癸未      乙未      丁未      己未
15－17 申/金       壬申      甲申      丙申      戊申      庚申
17－19 酉/金       癸酉      乙酉      丁酉      己酉      辛酉
19－21 戊/土       甲戌      丙戌      戊戌      庚戌      壬戌
21－23 亥/水       乙亥      丁亥      己亥      辛亥      癸亥
*/
const time_ganzhi_table = [
    ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥"],
    ["丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥"],
    ["戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥"],
    ["庚子", "辛丑", "壬寅", "癸卯", "甲辰", "己巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥"],
    ["壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"]
];


/*
十二月份天干强度表
生月\四柱天干     甲      乙      丙      丁      戊      己      庚      辛      壬      癸
子月              1.2     1.2     1.0     1.0     1.0     1.0     1.0     1.0     1.2     1.2
丑月              1.06    1.06    1.0     1.0     1.1     1.1     1.14    1.14    1.1     1.1
寅月              1.14    1.14    1.2     1.2     1.06    1.06    1.0     1.0     1.0     1.0
卯月              1.2     1.2     1.2     1.2     1.0     1.0     1.0     1.0     1.0     1.0
辰月              1.1     1.1     1.06    1.06    1.1     1.1     1.1     1.1     1.04    1.04
巳月              1.0     1.0     1.14    1.14    1.14    1.14    1.06    1.06    1.06    1.06
午月              1.0     1.0     1.2     1.2     1.2     1.2     1.0     1.0     1.0     1.0
未月              1.04    1.04    1.1     1.1     1.16    1.16    1.1     1.1     1.0     1.0
申月              1.06    1.06    1.0     1.0     1.0     1.0     1.14    1.14    1.2     1.2
酉月              1.0     1.0     1.0     1.0     1.0     1.0     1.2     1.2     1.2     1.2
戌月              1.0     1.0     1.04    1.04    1.14    1.14    1.16    1.16    1.06    1.06
亥月              1.2     1.2     1.0     1.0     1.0     1.0     1.0     1.0     1.14    1.14
*/
const tiangan_strength_table = [
    [1.2,   1.2,    1.0,    1.0,    1.0,    1.0,    1.0,    1.0,    1.2,    1.2],
    [1.06,  1.06,   1.0,    1.0,    1.1,    1.1,    1.14,   1.14,   1.1,    1.1],
    [1.14,  1.14,   1.2,    1.2,    1.06,   1.06,   1.0,    1.0,    1.0,    1.0],
    [1.2,   1.2,    1.2,    1.2,    1.0,    1.0,    1.0,    1.0,    1.0,    1.0],
    [1.1,   1.1,    1.06,   1.06,   1.1,    1.1,    1.1,    1.1,    1.04,   1.04],
    [1.0,   1.0,    1.14,   1.14,   1.14,   1.14,   1.06,   1.06,   1.06,   1.06],
    [1.0,   1.0,    1.2,    1.2,    1.2,    1.2,    1.0,    1.0,    1.0,    1.0],
    [1.04,  1.04,   1.1,    1.1,    1.16,   1.16,   1.1,    1.1,    1.0,    1.0],
    [1.06,  1.06,   1.0,    1.0,    1.0,    1.0,    1.14,   1.14,   1.2,    1.2],
    [1.0,   1.0,    1.0,    1.0,    1.0,    1.0,    1.2,    1.2,    1.2,    1.2],
    [1.0,   1.0,    1.04,   1.04,   1.14,   1.14,   1.16,   1.16,   1.06,   1.06],
    [1.2,   1.2,    1.0,    1.0,    1.0,    1.0,    1.0,    1.0,    1.14,   1.14]
];


/*
十二月份地支强度表
地支    支藏    生月：子月        丑月        寅月        卯月        辰月        巳月        午月        未月        申月        酉月        戌月        亥月
子      癸            1.2         1.1         1.0         1.0         1.04        1.06        1.0         1.0         1.2         1.2         1.06        1.14
丑      癸            0.36        0.33        0.3         0.3         0.312       0.318       0.3         0.3         0.36        0.36        0.318       0.342
丑      辛            0.2         0.228       0.2         0.2         0.23        0.212       0.2         0.22        0.228       0.248       0.232       0.2
丑      己            0.5         0.55        0.53        0.5         0.55        0.57        0.6         0.58        0.5         0.5         0.57        0.5
寅      丙            0.3         0.3         0.36        0.36        0.318       0.342       0.36        0.33        0.3         0.3         0.342       0.318
寅      甲            0.84        0.742       0.798       0.84        0.77        0.7         0.7         0.728       0.742       0.7         0.7         0.84
卯      乙            1.2         1.06        1.14        1.2         1.1         1.0         1.0         1.04        1.06        1.0         1.0         1.2
辰      乙            0.36        0.318       0.342       0.36        0.33        0.3         0.3         0.312       0.318       0.3         0.3         0.36
辰      癸            0.24        0.22        0.2         0.2         0.208       0.2         0.2         0.2         0.24        0.24        0.212       0.228
辰      戊            0.5         0.55        0.53        0.5         0.55        0.6         0.6         0.58        0.5         0.5         0.57        0.5
巳      庚            0.3         0.342       0.3         0.3         0.33        0.3         0.3         0.33        0.342       0.36        0.348       0.3
巳      丙            0.7         0.7         0.84        0.84        0.742       0.84        0.84        0.798       0.7         0.7         0.728       0.742
午      丁            1.0         1.0         1.2         1.2         1.06        1.14        1.2         1.1         1.0         1.0         1.04        1.06
未      丁            0.3         0.3         0.36        0.36        0.318       0.342       0.36        0.33        0.3         0.3         0.312       0.318
未      乙            0.24        0.212       0.228       0.24        0.22        0.2         0.2         0.208       0.212       0.2         0.2         0.24
未      己            0.5         0.55        0.53        0.5         0.55        0.57        0.6         0.58        0.5         0.5         0.57        0.5
申      壬            0.36        0.33        0.3         0.3         0.312       0.318       0.3         0.3         0.36        0.36        0.318       0.342
申      庚            0.7         0.798       0.7         0.7         0.77        0.742       0.7         0.77        0.798       0.84        0.812       0.7
酉      辛            1.0         1.14        1.0         1.0         1.1         1.06        1.0         1.1         1.14        1.2         1.16        1.0
戌      辛            0.3         0.342       0.3         0.3         0.33        0.318       0.3         0.33        0.342       0.36        0.348       0.3
戌      丁            0.2         0.2         0.24        0.24        0.212       0.228       0.24        0.22        0.2         0.2         0.208       0.212
戌      戊            0.5         0.55        0.53        0.5         0.55        0.57        0.6         0.58        0.5         0.5         0.57        0.5
亥      甲            0.36        0.318       0.342       0.36        0.33        0.3         0.3         0.312       0.318       0.3         0.3         0.36
亥      壬            0.84        0.77        0.7         0.7         0.728       0.742       0.7         0.7         0.84        0.84        0.724       0.798
*/
const dizhi_strength_table = [
    {di_zhi: '子', di_cang: '癸', strength: [1.2,  1.1,    1.0,    1.0,    1.04,   1.06,   1.0,    1.0,    1.2,    1.2,    1.06,   1.14]},
    {di_zhi: '丑', di_cang: '癸', strength: [0.36, 0.33,   0.3,    0.3,    0.312,  0.318,  0.3,    0.3,    0.36,   0.36,   0.318,  0.342]},
    {di_zhi: '丑', di_cang: '辛', strength: [0.2,  0.228,  0.2,    0.2,    0.23,   0.212,  0.2,    0.22,   0.228,  0.248,  0.232,  0.2]},
    {di_zhi: '丑', di_cang: '己', strength: [0.5,  0.55,   0.53,   0.5,    0.55,   0.57,   0.6,    0.58,   0.5,    0.5,    0.57,   0.5]},
    {di_zhi: '寅', di_cang: '丙', strength: [0.3,  0.3,    0.36,   0.36,   0.318,  0.342,  0.36,   0.33,   0.3,    0.3,    0.342,  0.318]},
    {di_zhi: '寅', di_cang: '甲', strength: [0.84, 0.742,  0.798,  0.84,   0.77,   0.7,    0.7,    0.728,  0.742,  0.7,    0.7,    0.84]},
    {di_zhi: '卯', di_cang: '乙', strength: [1.2,  1.06,   1.14,   1.2,    1.1,    1.0,    1.0,    1.04,   1.06,   1.0,    1.0,    1.2]},
    {di_zhi: '辰', di_cang: '乙', strength: [0.36, 0.318,  0.342,  0.36,   0.33,   0.3,    0.3,    0.312,  0.318,  0.3,    0.3,    0.36]},
    {di_zhi: '辰', di_cang: '癸', strength: [0.24, 0.22,   0.2,    0.2,    0.208,  0.2,    0.2,    0.2,    0.24,   0.24,   0.212,  0.228]},
    {di_zhi: '辰', di_cang: '戊', strength: [0.5,  0.55,   0.53,   0.5,    0.55,   0.6,    0.6,    0.58,   0.5,    0.5,    0.57,   0.5]},
    {di_zhi: '巳', di_cang: '庚', strength: [0.3,  0.342,  0.3,    0.3,    0.33,   0.3,    0.3,    0.33,   0.342,  0.36,   0.348,  0.3]},
    {di_zhi: '巳', di_cang: '丙', strength: [0.7,  0.7,    0.84,   0.84,   0.742,  0.84,   0.84,   0.798,  0.7,    0.7,    0.728,  0.742]},
    {di_zhi: '午', di_cang: '丁', strength: [1.0,  1.0,    1.2,    1.2,    1.06,   1.14,   1.2,    1.1,    1.0,    1.0,    1.04,   1.06]},
    {di_zhi: '未', di_cang: '丁', strength: [0.3,  0.3,    0.36,   0.36,   0.318,  0.342,  0.36,   0.33,   0.3,    0.3,    0.312,  0.318]},
    {di_zhi: '未', di_cang: '乙', strength: [0.24, 0.212,  0.228,  0.24,   0.22,   0.2,    0.2,    0.208,  0.212,  0.2,    0.2,    0.24]},
    {di_zhi: '未', di_cang: '己', strength: [0.5,  0.55,   0.53,   0.5,    0.55,   0.57,   0.6,    0.58,   0.5,    0.5,    0.57,   0.5]},
    {di_zhi: '申', di_cang: '壬', strength: [0.36, 0.33,   0.3,    0.3,    0.312,  0.318,  0.3,    0.3,    0.36,   0.36,   0.318,  0.342]},
    {di_zhi: '申', di_cang: '庚', strength: [0.7,  0.798,  0.7,    0.7,    0.77,   0.742,  0.7,    0.77,   0.798,  0.84,   0.812,  0.7]},
    {di_zhi: '酉', di_cang: '辛', strength: [1.0,  1.14,   1.0,    1.0,    1.1,    1.06,   1.0,    1.1,    1.14,   1.2,    1.16,   1.0]},
    {di_zhi: '戌', di_cang: '辛', strength: [0.3,  0.342,  0.3,    0.3,    0.33,   0.318,  0.3,    0.33,   0.342,  0.36,   0.348,  0.3]},
    {di_zhi: '戌', di_cang: '丁', strength: [0.2,  0.2,    0.24,   0.24,   0.212,  0.228,  0.24,   0.22,   0.2,    0.2,    0.208,  0.212]},
    {di_zhi: '戌', di_cang: '戊', strength: [0.5,  0.55,   0.53,   0.5,    0.55,   0.57,   0.6,    0.58,   0.5,    0.5,    0.57,   0.5]},
    {di_zhi: '亥', di_cang: '甲', strength: [0.36, 0.318,  0.342,  0.36,   0.33,   0.3,    0.3,    0.312,  0.318,  0.3,    0.3,    0.36]},
    {di_zhi: '亥', di_cang: '壬', strength: [0.84, 0.77,   0.7,    0.7,    0.728,  0.742,  0.7,    0.7,    0.84,   0.84,   0.724,  0.798]}
];


/*
木 - 0
火 - 1
土 - 2
金 - 3
水 - 4
*/
const wuxing_table = ['木', '火', '土', '金', '水']; // 五行序列，如 0 表示 木
/*
天干地支的五行属性表：
天干：甲：木、乙：木、丙：火、丁：火、戊：土、己：土、庚：金、辛：金、壬：水、癸：水
地支：子：水、丑：土、寅：木、卯：木、辰：土、巳：火、午：火、未：土、申：金、酉：金、戌：土、亥：水
*/
const tiangan_wuxing_prop = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 天干对应五行， = floor(x / 2)
const dizhi_wuxing_prop = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4]; // 地支对应五行，y = ((x + 11) % 12) / 3 为整则取 2 否则取 floor(y)

// 同类：
// const tong_me = [0, 1, 2, 3, 4]; // 同我， = x ，同行
const sheng_me = [4, 0, 1, 2, 3]; // 生我， = (x + 4) % 5 ，五行同类对应的五行（生，如水生木，所以 0 木 对应 4 水）
// 异类：
const ke_me = [3, 4, 0, 1, 2]; // 克我， = (x + 3) % 5
const i_ke = [2, 3, 4, 0, 1]; // 我克， = (x + 2) % 5
const i_sheng = [1, 2, 3, 4, 0]; // 我生， = (x + 1) % 5



// 将八字字符串转换为对应的索引值数组，方便后面计算
// 支持八个字或六个字
// bazi_str ：八字文字，由天干和地支组成的，六个或八个汉字
// 返回值：八字对应的索引数组，长度为 6 或 8 （长度同输入的 bazi_str 的字符个数）
function bazi2indexs(bazi_str) {
    if(bazi_str.length != 6 && bazi_str.length != 8) {
        throw new Error('八字字符串长度不合法： ' + bazi_str);
    }
    var res = [];
    for(var k = 0; k < bazi_str.length; k += 2) {
        var g = tiangan.indexOf(bazi_str[k]);
        if(g < 0) {
            throw new Error('八字字符不合法： ' + bazi_str + '[' + k + ']: '  + bazi_str[k]);
        }
        res.push(g);
        var z = dizhi.indexOf(bazi_str[k + 1]);
        if(z < 0) {
            throw new Error('八字字符不合法： ' + bazi_str + '[' + (k + 1) + ']: '  + bazi_str[k + 1]);
        }
        res.push(z);
    }
    return res;
}


// 根据出生年月日的干支（日干）计算时辰干支
// bazi_arr ：八字索引数组，其实只会用索引为 4 的日天干
// hour ：出生小时，范围 [0, 23]
// 返回值：时辰干支索引数组，长度为 2
function time_ganzhi(bazi_arr, hour) {
    var day_gan = bazi_arr[4]; // 日天干
    if(day_gan >= 5) day_gan -= 5;
    hour = hour % 24; // 0 - 23
    // 将二十四小时制转换为时辰，如 23 - 1 为 子时（第一个地支）
    var col = Math.floor((hour + 1) / 2);
    col = col % 12;
    // console.log("time_ganzhi: ", hour , col);
    var time_ganzhi_str = time_ganzhi_table[day_gan][col];
    var res = [];
    res.push(tiangan.indexOf(time_ganzhi_str[0]));
    res.push(dizhi.indexOf(time_ganzhi_str[1]));
    return res;
}


// 根据日干求命里属性
// 日干对应的五行即为命里属性
// bazi_arr ：八字索引数组，其实只会用索引为 4 的日天干
// 返回值：命里属性索引（在 wuxing_table 中的索引）
function ming_wuxing_prop(bazi_arr) {
    var day_gan = bazi_arr[4]; // 日天干
    var res = tiangan_wuxing_prop[day_gan];
    // console.log("命属：", wuxing_table[res]);
    return res;
}


// 五行强度值
// bazi_arr ：八字索引数组，要求长度必须是八
/* 返回值：返回一个对象，其元素分别为 天干的五行强度数组、地支的五行强度数组和总的五行强度数组
{
    tiangan_strenth: [...],
    dizhi_strenth: [...],
    total_strenth: [...]
}
*/
function bazi_strength(bazi_arr) {
    var tiangan_strenth = [0.0, 0.0, 0.0, 0.0, 0.0];
    var dizhi_strenth = [0.0, 0.0, 0.0, 0.0, 0.0];

    var month_zhi = bazi_arr[3]; // 月支

    // 扫描 4 个天干
    // 月支 查询 天干强度表 得到一行
    // 四个天干 的 五行属性 查询 天干强度表 那一行即可得到 对应五行的天干强度值
    for(var k = 0; k < bazi_arr.length; k += 2) {
        var tiangan_wuxing = tiangan_wuxing_prop[bazi_arr[k]];
        tiangan_strenth[tiangan_wuxing] += tiangan_strength_table[month_zhi][bazi_arr[k]];
    }

    // 扫描支藏
    // 四个地支 查询 地支强度表 得到 地藏 和 地支强度表 其中一行
    // 用 月支 查询该行得到的强度就是 地藏 对应五行的地支强度值
    // 注意：一个地支可能有多个地藏
    for(var k = 1; k < bazi_arr.length; k += 2) {
        var dizhi_str = dizhi[bazi_arr[k]]; // 地支的字符
        var di_cang = -1; // 地藏的天干索引
        for(var n = 0; n < dizhi_strength_table.length; n++) {
            if(dizhi_str == dizhi_strength_table[n].di_zhi) {
                di_cang = tiangan.indexOf(dizhi_strength_table[n].di_cang);
                // break; // 一个地支可能有多个地藏，要遍历完全
                dizhi_strenth[tiangan_wuxing_prop[di_cang]] += dizhi_strength_table[n].strength[month_zhi];
                // console.log("bazi_strength: ", bazi_arr[k], dizhi_str, di_cang, n, month_zhi);
            }
        }
    }

    // 总强度值 = 天干强度值 + 地支强度值
    var total_strenth = [];
    for(var k = 0; k < 5; k++) {
        total_strenth.push(tiangan_strenth[k] + dizhi_strenth[k]);
    }

    return {
        tiangan_strenth,
        dizhi_strenth,
        total_strenth
    };
}



// 求同类和异类的强度值
// 计算日天干对应五行的同类（生改五行值的五行值）强度之和与异类强度之和
/* 同类和异类强度值比较接近，则说明该八字比较平衡，也暗示人生平顺； 若两者数值相差较大
（如，大于 1 ，甚至大于 2 ），则说明五行不平衡，可以通过名字来弥补，或者将来找对象时候通过婚姻来补平
得到同类和异类数值以后，如何确定“用神”或“喜神”
*/
// bazi_arr ：八字索引数组，其实只会用索引为 4 的日天干
// total_strenth ：五行分别的强度值数组，长度为 5
// 返回值：同类和异类的强度值数组，长度为 2
function source_or_not_strenth(bazi_arr, total_strenth) {
    var day_gan_wuxing = tiangan_wuxing_prop[bazi_arr[4]]; // 日天干五行属性索引
    var day_gan_wuxing_source = sheng_me[day_gan_wuxing]; // 同类五行属性索引
    var source_strenth = total_strenth[day_gan_wuxing] + total_strenth[day_gan_wuxing_source];
    var source_not_strenth = 0;
    for(var k = 0; k < total_strenth.length; k++) {
        if(k != day_gan_wuxing && k != day_gan_wuxing_source) {
           source_not_strenth += total_strenth[k];
        }
    }
    return [source_strenth, source_not_strenth];
}

// 计算得到同类和异类的五行属性
// bazi_arr ：八字索引数组，其实只会用索引为 4 的日天干
// 返回值：对象包括同类和异类的五行索引数组
/*
{
    source_wuxing: [int; 2],
    source_not_wuxing: [int; 3]
}
*/
function source_or_not_wuxing(bazi_arr) {
    var day_gan_wuxing = tiangan_wuxing_prop[bazi_arr[4]]; // 日天干五行属性索引
    var source_wuxing = [day_gan_wuxing];
    var source_not_wuxing = [];
    source_wuxing.push(sheng_me[day_gan_wuxing]); // 同类五行属性索引
    source_not_wuxing.push(ke_me[day_gan_wuxing]);
    source_not_wuxing.push(i_ke[day_gan_wuxing]);
    source_not_wuxing.push(i_sheng[day_gan_wuxing]);
    return {
        source_wuxing,
        source_not_wuxing
    }
}

// 根据 bazi_strength 计算的分值推荐取名的五行属性
// bazi_arr ：八字索引数组，其实只会用索引为 4 的日天干
// s_or_not_wuxing ：为 source_or_not_wuxing 返回结果
// s_or_not_strenth ： source_or_not_strenth 返回值，数组长度为 2
// 返回值：推荐取名的五行索引数组
function recommend_wuxing1(bazi_arr, s_or_not_wuxing, s_or_not_strenth) {
    var res = [];
    var diff = s_or_not_strenth[0] - s_or_not_strenth[1];
    console.log("recommend_wuxing1: ", diff, s_or_not_strenth);
    if(diff > 2) { // 太强
        res.push(s_or_not_wuxing.source_not_wuxing[0]);
        res.push(s_or_not_wuxing.source_not_wuxing[1]);
        res.push(s_or_not_wuxing.source_not_wuxing[2]);
    } else if(diff > 1) { // 有点强
        res.push(s_or_not_wuxing.source_not_wuxing[1]);
        res.push(s_or_not_wuxing.source_not_wuxing[0]);
        res.push(s_or_not_wuxing.source_not_wuxing[2]);
    } else if(diff > 0) { // 稍强
        res.push(s_or_not_wuxing.source_not_wuxing[2]);
        res.push(s_or_not_wuxing.source_not_wuxing[1]);
        res.push(s_or_not_wuxing.source_not_wuxing[0]);
    } else if(diff < -2) { // 太弱
        res.push(s_or_not_wuxing.source_wuxing[0]);
        res.push(s_or_not_wuxing.source_wuxing[1]);
        res.push(wuxing_table.length); // 占位，方便打印
    } else if(diff < -1) { // 有点弱
        res.push(s_or_not_wuxing.source_wuxing[0]);
        res.push(s_or_not_wuxing.source_wuxing[1]);
        res.push(wuxing_table.length); // 占位，方便打印
    } else if(diff < 0) { // 稍弱
        res.push(s_or_not_wuxing.source_wuxing[1]);
        res.push(s_or_not_wuxing.source_wuxing[0]);
        res.push(wuxing_table.length); // 占位，方便打印
    }
    return res;
}


// 强度计算表，八个字中每个字有不同的权重， 日干 为本命，离其近的越大，其中特殊的 月支 强度最大
const recommend_wuxing2_score_table = [0.25, 0.2, 0.5, 1, 0, 0.5, 0.5, 0.4];
// 计算强度值的方式 2 ，根据 recommend_wuxing2_score_table 计算
// bazi_arr ：八字索引数组
// s_or_not_wuxing ：为 source_or_not_wuxing 返回结果
// 返回值：方式 2 的得分，最大绝对值是 recommend_wuxing2_score_table 之和，可正可负
//  为正表示强，为负表示弱
function bazi_strength2(bazi_arr, s_or_not_wuxing) {
    var day_gan_wuxing = tiangan_wuxing_prop[bazi_arr[4]]; // 日天干五行属性索引
    var bazi_wuxing_arr = [];
    for (var k = 0; k < bazi_arr.length; k += 2) {
        bazi_wuxing_arr.push(tiangan_wuxing_prop[bazi_arr[k]]);
        bazi_wuxing_arr.push(dizhi_wuxing_prop[bazi_arr[k + 1]]);
    }
    var score = 0;
    console.log('recommend_wuxing2: ', bazi_wuxing_arr, s_or_not_wuxing);
    for (var k = 0; k < bazi_wuxing_arr.length; k++) {
        if(s_or_not_wuxing.source_wuxing.indexOf(bazi_wuxing_arr[k]) >= 0) {
            // 此处还可细分为 同我 和 生我 加不同的比例
            // console.log('recommend_wuxing2: ', bazi_wuxing_arr[k], score , '+', recommend_wuxing2_score_table[k])
            score += recommend_wuxing2_score_table[k];
        }
        if(s_or_not_wuxing.source_not_wuxing.indexOf(bazi_wuxing_arr[k]) >= 0) {
            // 此处还可细分为 克我 、 我克 和 我生 加不同的比例
            // console.log('recommend_wuxing2: ', bazi_wuxing_arr[k], score , '-', recommend_wuxing2_score_table[k])
            score -= recommend_wuxing2_score_table[k];
        }
    }
    console.log("bazi_strength2: ", score);
    return score;
}

// 根据 recommend_wuxing2_score_table 表计算的分值推荐取名的五行属性
// score ： bazi_strength2 返回的得分
// s_or_not_wuxing ：为 source_or_not_wuxing 返回结果
// 返回值：推荐取名的五行索引数组
function recommend_wuxing2(score, s_or_not_wuxing) {
    var res = [];
    if(score > 2) { // 太强
        res.push(s_or_not_wuxing.source_not_wuxing[0]);
        res.push(s_or_not_wuxing.source_not_wuxing[1]);
        res.push(s_or_not_wuxing.source_not_wuxing[2]);
    } else if(score > 1) { // 有点强
        res.push(s_or_not_wuxing.source_not_wuxing[1]);
        res.push(s_or_not_wuxing.source_not_wuxing[0]);
        res.push(s_or_not_wuxing.source_not_wuxing[2]);
    } else if(score > 0) { // 稍强
        res.push(s_or_not_wuxing.source_not_wuxing[2]);
        res.push(s_or_not_wuxing.source_not_wuxing[1]);
        res.push(s_or_not_wuxing.source_not_wuxing[0]);
    } else if(score < -2) { // 太弱
        res.push(s_or_not_wuxing.source_wuxing[0]);
        res.push(s_or_not_wuxing.source_wuxing[1]);
        res.push(wuxing_table.length); // 占位，方便打印
    } else if(score < -1) { // 有点弱
        res.push(s_or_not_wuxing.source_wuxing[0]);
        res.push(s_or_not_wuxing.source_wuxing[1]);
        res.push(wuxing_table.length); // 占位，方便打印
    } else if(score < 0) { // 稍弱
        res.push(s_or_not_wuxing.source_wuxing[1]);
        res.push(s_or_not_wuxing.source_wuxing[0]);
        res.push(wuxing_table.length); // 占位，方便打印
    }
    return res;
}

// 以上所有功能集合
// bazi_arr ：八字索引数组，要求长度必须是八
/* 返回值：返回一个对象，其元素分别为 天干的五行强度数组、地支的五行强度数组和总的五行强度数组
{
    tiangan_strenth: [float; 5],
    dizhi_strenth: [float; 5],
    total_strenth: [float; 5],
    source_or_not_strenth: [float; 2],
    ming_wuxing: string

    source_wuxing: [int; 2],
    source_not_wuxing: [int; 2],

    recommend_wuxing1: [int; 3],
    recommend_wuxing2: [int; 3],
}
*/
function bazi_all(bazi_arr) {
    var res = bazi_strength(bazi_arr);

    res.source_or_not_strenth = source_or_not_strenth(bazi_arr, res.total_strenth);
    res.ming_wuxing = wuxing_table[ming_wuxing_prop(bazi_arr)];

    var s_or_not_wuxing = source_or_not_wuxing(bazi_arr);
    res.source_wuxing = s_or_not_wuxing.source_wuxing;
    res.source_not_wuxing = s_or_not_wuxing.source_not_wuxing;

    res.recommend_wuxing1 = recommend_wuxing1(bazi_arr, s_or_not_wuxing, res.source_or_not_strenth);

    res.bazi_strength2_score = bazi_strength2(bazi_arr, s_or_not_wuxing);
    res.recommend_wuxing2 = recommend_wuxing2(res.bazi_strength2_score, s_or_not_wuxing);
    return res;
}
