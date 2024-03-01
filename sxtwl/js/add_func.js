

function datetime_change() {
    console.log("datetime_change:", Cml_datetime.value); // 2024-02-28T11:04
    var t = new Date(Cml_datetime.value);
    Cml_y.value = t.getFullYear();
    Cml_m.value = t.getMonth() + 1;
    Cml_d.value = t.getDate();
    Cml_his.value = t.getHours() + ":" + t.getMinutes() + ":" + "00";
}

// 从 bazi_span 中获取八字，同时也要返回时间
function bazi_span_get() {
    var bazi_span_ele = document.getElementById('bazi_span');
    if(!bazi_span_ele) {
        // 如果没有计算则自动计算一次
        ML_calc();
        bazi_span_ele = document.getElementById('bazi_span');
    }
    var bazi_str_orig = bazi_span_ele.innerHTML;
    // console.log(bazi_str_orig);
    var bazi_str_arr = bazi_str_orig.trim().split(" ");
    if(bazi_str_arr.length != 4) {
        return null;
    }
    var bazi_str = bazi_str_arr[0].slice(0, 2) + bazi_str_arr[1].slice(0, 2) + bazi_str_arr[2].slice(0, 2) + bazi_str_arr[3].slice(0, 2);
    // console.log(bazi_str);
    // 需要转换为类似如： 2024-03-01T13:02:01 ，若写为 2024-3-1T13:2:1 则不行
    var time_str = Cml_y.value;
    var temps = [parseInt(Cml_m.value), parseInt(Cml_d.value)]
    for(var k = 0; k < temps.length; k++) {
        var split_char = '-';
        if(temps[k] < 10) {
            split_char += '0';
        }
        time_str += split_char;
        time_str += temps[k];
    }
    temps = [];
    var his_arr = Cml_his.value.split(':');
    for(var k = 0; k < his_arr.length; k++) {
        temps.push(parseInt(his_arr[k]));
    }
    for(var k = 0; k < temps.length; k++) {
        var split_char = ':';
        if(k == 0) {
            split_char = 'T';
        }
        if(temps[k] < 10) {
            split_char += '0';
        }
        time_str += split_char;
        time_str += temps[k];
    }
    console.log(time_str);
    var bazi_time = new Date(time_str);
    console.log(bazi_time.toLocaleString('zh-CN'));
    return {bazi_time, bazi_str};
}


function bazi_cur_time() {
    var {bazi_time, bazi_str} = bazi_span_get();
    console.log(bazi_str);
    var bazi_arr = bazi2indexs(bazi_str);
    console.log(bazi_arr);
    // console.log(time_ganzhi(bazi_arr, 14));
    var bazi_all_res = bazi_all(bazi_arr);
    console.log(bazi_all_res);
    var cal_wuxing = document.getElementById('Cal_WuXing');
    cal_wuxing.innerHTML = gen_item_str(bazi_time, bazi_arr, bazi_all_res);
}

function bazi_cur_day() {
    var {bazi_time, bazi_str} = bazi_span_get();
    console.log(bazi_str);
    var bazi_arr = bazi2indexs(bazi_str);
    console.log(bazi_arr);
    var cal_wuxing_content = '';
    for(var k = 0; k < 24; k += 2) {
        bazi_time.setHours(k);
        var time_arr = time_ganzhi(bazi_arr, k);
        bazi_arr[6] = time_arr[0];
        bazi_arr[7] = time_arr[1];
        var bazi_all_res = bazi_all(bazi_arr);
        console.log(bazi_all_res);
        cal_wuxing_content += gen_item_str(bazi_time, bazi_arr, bazi_all_res);
    }
    var cal_wuxing = document.getElementById('Cal_WuXing');
    cal_wuxing.innerHTML = cal_wuxing_content;
}


// 五行列表扩展一个位置，方便显示
const wuxing_table6 = [...wuxing_table, ''];
// 将结果转换为显示 HTML 字符串
function gen_item_str(bazi_time, bazi_arr, bazi_all_res) {
    return res = `
<div style="font-size: 0.9rem;border: solid 1px black; margin: 8px;border-radius: 7px;box-shadow: 1px 1px gray;">
    <div>
        ${bazi_time.toLocaleString('zh-CN')} 出生的人命属 <b>${bazi_all_res.ming_wuxing}</b>；
        同类：${wuxing_table6[bazi_all_res.source_wuxing[0]]} ${wuxing_table6[bazi_all_res.source_wuxing[1]]}；
        异类：${wuxing_table6[bazi_all_res.source_not_wuxing[0]]} ${wuxing_table6[bazi_all_res.source_not_wuxing[1]]}
                    ${wuxing_table6[bazi_all_res.source_not_wuxing[2]]}
        <div>
            推荐起名五行属性：
            <div style="margin-left: 2rem; ">
                方式 1 ：
                    <b>${wuxing_table6[bazi_all_res.recommend_wuxing1[0]]} ${wuxing_table6[bazi_all_res.recommend_wuxing1[1]]}
                    ${wuxing_table6[bazi_all_res.recommend_wuxing1[2]]}</b>
                    （同类得分：<b>${bazi_all_res.source_or_not_strenth[0].toFixed(3)}</b>；
                    异类得分：<b>${bazi_all_res.source_or_not_strenth[1].toFixed(3)}</b>）
            </div>
            <div style="margin-left: 2rem; ">
            方式 2 ：
                <b>${wuxing_table6[bazi_all_res.recommend_wuxing2[0]]} ${wuxing_table6[bazi_all_res.recommend_wuxing2[1]]}
                ${wuxing_table6[bazi_all_res.recommend_wuxing2[2]]}</b>
                （得分：<b>${bazi_all_res.bazi_strength2_score.toFixed(3)}</b>）
            </div>
        </div>
    </div>
    <div style="font-size: 1.2rem;font-weight: bold; margin: 10px;">
        <div style="margin-left: 3rem; ">
            天干：
            ${tiangan[bazi_arr[0]]}(${wuxing_table6[tiangan_wuxing_prop[bazi_arr[0]]]})
            ${tiangan[bazi_arr[2]]}(${wuxing_table6[tiangan_wuxing_prop[bazi_arr[2]]]})
            ${tiangan[bazi_arr[4]]}(${wuxing_table6[tiangan_wuxing_prop[bazi_arr[4]]]})
            ${tiangan[bazi_arr[6]]}(${wuxing_table6[tiangan_wuxing_prop[bazi_arr[6]]]})
        </div>
        <div style="margin-left: 3rem; ">
            地支：
            ${dizhi[bazi_arr[1]]}(${wuxing_table6[dizhi_wuxing_prop[bazi_arr[1]]]})
            ${dizhi[bazi_arr[3]]}(${wuxing_table6[dizhi_wuxing_prop[bazi_arr[3]]]})
            ${dizhi[bazi_arr[5]]}(${wuxing_table6[dizhi_wuxing_prop[bazi_arr[5]]]})
            ${dizhi[bazi_arr[7]]}(${wuxing_table6[dizhi_wuxing_prop[bazi_arr[7]]]})
        </div>
    </div>
</div>
    `;
}

window.onload = function() {
    showPage(11); // 八字功能页面

    Sel1.value = "30"; // 重庆
    change(0);
    Sel2.value = "TVXY"; // 南岸区
    change2();

};
