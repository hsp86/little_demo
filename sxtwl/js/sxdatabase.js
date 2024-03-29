if (typeof (Worker) !== "undefined") {
    var ht = {
        arrowTo: function(canId, ox, oy, x1, y1, x2, y2) {
            var sta = new Array(x1,y1);
            var end = new Array(x2,y2);
            var ctx = canId;
            ctx.beginPath();
            ctx.translate(ox, oy, 0);
            ctx.moveTo(sta[0], sta[1]);
            ctx.lineTo(end[0], end[1]);
            ctx.fill();
            ctx.stroke();
            ctx.save();
            ctx.translate(end[0], end[1]);
            var ang = (end[0] - sta[0]) / (end[1] - sta[1]);
            ang = Math.atan(ang);
            if (end[1] - sta[1] >= 0)
                ctx.rotate(-ang);
            else
                ctx.rotate(Math.PI - ang);
            ctx.lineTo(-5, -10);
            ctx.lineTo(0, -5);
            ctx.lineTo(5, -10);
            ctx.lineTo(0, 0);
            ctx.fill();
            ctx.restore();
            ctx.closePath()
        },
        shape: function(path) {
            ph = path.replace(/[ ]/g, ",");
            var ph = ph.split(",");
            var args = ph.length;
            context.lineWidth = 1;
            context.strokeStyle = "#D0D0D0";
            context.fillStyle = "#D0D0D0";
            var jsq = 0;
            var s = "";
            for (var i = 0; i < args; i++)
                if (ph[i] == "m" || ph[i] == "e") {
                    if (jsq == 1) {
                        context.closePath();
                        context.fill();
                        jsq = 0
                    }
                    s = s + "\n m:" + ph[i + 1] + "," + ph[i + 2] + "\n";
                    var move_x = int2(ph[i + 1] * (Canvas_w / 2010));
                    var move_y = int2(ph[i + 2] * (Canvas_h / 970));
                    context.beginPath();
                    context.moveTo(move_x, move_y);
                    if (jsq == 0)
                        jsq = 1;
                    i = i + 2
                } else if (ph[i] == "l") {
                    s = s + "l:" + ph[i + 1] + "," + ph[i + 2];
                    var line_x = int2(ph[i + 1] * (Canvas_w / 2010));
                    var line_y = int2(ph[i + 2] * (Canvas_h / 970));
                    context.lineTo(line_x, line_y);
                    i = i + 2
                } else {
                    s = s + "--\x3e" + ph[i] + "," + ph[i + 1];
                    var line_x = int2(ph[i] * (Canvas_w / 2010));
                    var line_y = int2(ph[i + 1] * (Canvas_h / 970));
                    context.lineTo(line_x, line_y);
                    i = i + 1
                }
        }
    };
    var myCanvas = "";
    var context = "";
    var Canvas_w = 488;
    var Canvas_h = 400;
    var S_x = S_y = M_x = M_y = E_x = E_y = e_x = e_y = s_x = s_y = m_x = m_y = 0;
    var S_r = M_r = E_r = e_r = 50;
    var S_f = M_f = E_f = e_f = s_f = m_f = Jb_f = "";
    var diming = new Array(116.4,40,"\u5317\u4eac",131.15,46.63,"\u53cc\u9e2d\u5c71",126,46,"",119,25.4,"\u8386\u7530",91,29.7,"\u62c9\u8428",-73,41,"\u7ebd\u7ea6",151,-34,"\u6089\u5c3c",37,56,"\u83ab\u65af\u79d1",30,-20,"\u975e\u6d32\u5357\u90e8",-56,-33,"\u4e4c\u62c9\u572d");
    var ditu = "m 2,212 l 58,180,121,180,128,143,150,129,130,129,99,147,92,171,74,170,42,150,122,104,175,102,230,118,223,124,192,125,215,138,405,92,413,99,411,126,445,117,422,100,590,65,639,76,606,88,724,88,741,101,818,93,942,111,1010,111,1064,126,1045,134,1003,130,1003,146,918,159,896,189,881,189,879,170,926,146,922,142,861,159,793,160,767,176,776,181,793,180,793,213,758,253,740,255,720,270,731,299,714,297,713,282,702,273,689,273,688,263,667,274,673,283,689,283,676,296,689,325,678,353,642,373,604,373,596,387,619,422,598,435,569,417,564,440,594,475,586,479,551,441,554,415,531,400,519,371,459,401,453,433,437,441,390,359,335,353,278,328,273,336,299,361,317,354,340,375,259,420,206,339,187,334,240,427,291,431,269,470,220,511,228,566,163,663,108,672,72,575,85,524,41,453,2,454,2,290,65,286,67,308,193,320,208,292,163,291,158,273,203,260,231,267,234,253,208,229,175,229,161,260,129,282,86,232,74,238,99,265,94,275,54,246,2,272,2,212 " + "m 67,54 l 115,46,154,50,155,54,119,58,100,71,67,54 m 300,96 l 321,77,385,68,388,71,315,91,327,101,317,105,300,96 m 522,45 l 547,44,592,58,573,62,550,60,522,45 m 775,75 l 780,82,808,83,818,74,806,72,775,75 " + "m 809,180 l 799,188,800,232,811,230,809,180 m 802,238 l 790,256,788,284,748,295,738,310,744,317,754,302,791,301,797,269,816,244,802,238 " + "m 686,354 l 681,357,677,365,683,371,686,354 m 544,460 l 583,487,602,515,640,527,597,528,544,460 m 662,452 l 619,482,638,507,646,507,672,484,665,469,673,460,662,452 m 680,480 l 671,513,684,514,703,479,680,480 m 747,492 l 750,504,808,532,846,537,820,507,776,494,747,492 m 635,375 l 650,382,635,390,620,385,635,375 " + "m 771,548 l 708,560,641,604,659,675,746,653,790,690,842,689,865,666,868,628,802,541,796,576,767,564,771,548 m 973,672 l 981,693,941,736,952,742,1003,693,973,672 m 282,550 l 257,571,254,619,268,619,289,564,282,550 " + "m 1092,112 l 1117,120,1119,126,1091,124,1082,130,1118,134,1091,146,1135,163,1105,176,1107,178,1140,169,1172,151,1255,160,1316,204,1322,278,1425,388,1517,419,1550,449,1579,450,1560,516,1587,566,1620,582,1593,744,1614,786,1644,785,1621,773,1643,745,1634,739,1771,605,1815,536,1815,519,1629,429,1557,442,1543,405,1522,404,1526,377,1486,392,1464,371,1477,332,1546,326,1559,351,1559,320,1618,256,1672,238,1639,204,1685,203,1699,192,1657,162,1582,146,1574,200,1502,169,1483,153,1573,108,1607,115,1607,126,1582,134,1644,145,1667,119,1559,96,1558,75,1666,31,1593,27,1334,68,1329,109,1259,112,1142,101,1092,112 " + "m 1680,39 l 1617,62,1634,77,1684,75,1734,110,1721,121,1744,151,1774,156,1788,131,1890,101,1864,88,1897,88,1906,54,1947,36,1927,36,1862,49,1892,37,1831,41,1836,33,1900,28,1833,22,1750,39,1680,39 m 1889,122 l 1884,136,1914,138,1933,130,1889,122 " + "m 1969,175 l 1959,182,1958,198,1979,192,1980,179,1969,175 m 1987,162 l 1980,172,1995,182,1976,203,2010,201,2010,180,1996,173,2002,166,1987,162 m 2010,208 l 1989,215,2001,222,2001,247,1961,249,1962,287,1999,285,2010,273,2010,208 m 2010,297 l 1980,297,1918,361,1916,415,1943,452,1970,466,2010,456,2010,297 " + "e";
    var Jb_xy = new Array(131.15,46.63);
    var tu1 = {
        isInit: 0,
        x0: 0,
        y0: 0,
        w: 0,
        h: 0,
        dx: 0,
        dy: 0,
        DiTu: function(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f) {
            context.clearRect(0, 0, myCanvas.width, myCanvas.height);
            context.beginPath();
            context.fillStyle = "#007FFF";
            context.strokeStyle = "#007FFF";
            context.fillRect(0, 0, myCanvas.width, myCanvas.height);
            context.strokeRect(0, 0, myCanvas.width, myCanvas.height);
            ht.shape(ditu);
            var grid_cols = 8;
            var grid_rows = 6;
            var cell_height = myCanvas.height / grid_rows;
            var cell_width = myCanvas.width / grid_cols;
            context.lineWidth = 0.5;
            context.strokeStyle = "green";
            context.beginPath();
            for (var col = 0; col <= grid_cols; col++) {
                var x = col * cell_width;
                context.moveTo(x, 0);
                context.lineTo(x, myCanvas.height);
                if (col > 0 && col < grid_cols) {
                    context.font = "12px Palatino";
                    context.fillStyle = "red";
                    context.fillText(30 * (col - 4), x - 10, myCanvas.height - 10);
                    context.fillStyle = "#000000";
                    context.fillText("(" + (col <= 4 ? 45 * col : 45 * col - 360) + ")", x - 15, myCanvas.height)
                }
            }
            for (var row = 0; row <= grid_rows; row++) {
                var y = cell_height * (grid_rows - row);
                context.moveTo(0, y);
                context.lineTo(myCanvas.width, y);
                if (row) {
                    context.font = "12px Palatino";
                    context.fillStyle = "red";
                    context.fillText(15 * row, 1, y);
                    context.fillStyle = "#000000";
                    context.fillText("(" + (row > 3 ? "+" : "") + 30 * (row - 3) + ")", 10, y)
                }
            }
            context.stroke();
            for (i = 0; i < diming.length; i += 3) {
                var J = diming[i];
                if (J < 0)
                    J += 360;
                var W = diming[i + 1];
                J = J / 45,
                W = W / 30 + 3;
                J = this.x0 + this.dx * J - 12;
                W = this.y0 - this.dy * W - 5;
                context.font = "12px Palatino";
                context.fillStyle = "red";
                context.fillText("\u00b7", J, W);
                context.fillStyle = "#000000";
                context.fillText(diming[i + 2], J + 6, W)
            }
            var args = Jb_xy.length;
            var realargs = args / 2;
            context.lineWidth = 1;
            context.strokeStyle = "#FF00FF";
            context.fillStyle = "#FF00FF";
            var s = "";
            for (var i = 0; i < args; i = i + 2) {
                Jb_x = Jb_xy[i];
                Jb_y = Jb_xy[i + 1];
                context.beginPath();
                context.moveTo(Jb_x, Jb_y);
                context.lineTo(Jb_x + 3, Jb_y + 10);
                context.lineTo(Jb_x - 3, Jb_y + 10);
                context.closePath();
                context.fill()
            }
            this.Sun = "Sun";
            if (S_f == "block") {
                context.beginPath();
                context.arc(S_x, S_y, S_r * Canvas_h / 600, 0, 360);
                context.fillStyle = "red";
                context.fill();
                context.closePath()
            }
            this.Moon = "Moon";
            if (M_f == "block") {
                context.beginPath();
                context.arc(M_x, M_y, M_r * Canvas_h / 600, 0, 360);
                context.fillStyle = "#b0b000";
                context.fill();
                context.closePath()
            }
            this.Eys = "Eys";
            if (E_f == "block") {
                context.beginPath();
                context.arc(E_x, E_y, E_r * Canvas_h / 600, 0, 360);
                context.fillStyle = "rgba(0,0,0,.3)";
                context.fill();
                context.closePath()
            }
            this.eys = "eys";
            if (e_f == "block") {
                context.beginPath();
                context.arc(e_x, e_y, e_r * Canvas_h / 600, 0, 360);
                context.fillStyle = "rgba(0,0,0,.6)";
                context.fill();
                context.closePath()
            }
            this.sun = "sun";
            if (s_f == "block") {
                context.beginPath();
                context.arc(s_x, s_y, 7, 0, 360);
                context.fillStyle = "red";
                context.fill();
                context.closePath()
            }
            this.moon = "moon";
            if (m_f == "block") {
                context.beginPath();
                context.arc(m_x, m_y, 7, 0, 360);
                context.fillStyle = "#B0A070";
                context.fill();
                context.closePath()
            }
        },
        init: function(can) {
            myCanvas = document.getElementById("myCanvas1");
            context = myCanvas.getContext("2d");
            if (this.isInit)
                return;
            this.isInit = 1;
            Canvas_w = String(can.style.width).replace(/[^0-9]/g, "");
            Canvas_h = String(can.style.height).replace(/[^0-9]/g, "");
            can.coordsize = Canvas_w + "," + Canvas_h;
            var x0, y0, dx, dy, vs, vx, vy, us;
            dx = this.dx = int2((Canvas_w - this.x0) / 8.5);
            dy = this.dy = int2((Canvas_h - this.y0) / 6.5);
            x0 = this.x0 = int2((Canvas_w - this.dx * 8) / 2);
            y0 = this.y0 = Canvas_h - int2((Canvas_h - this.dy * 6) / 2);
            vs = this.vs = this.dx,
            vx = this.vx = x0 + 4 * dx,
            vy = this.vy = y0 - 3 * dy,
            us = this.us = vs / 2;
            S_x = M_x = E_x = e_x = s_x = m_x = vx;
            S_y = M_y = E_y = e_y = s_y = m_y = vy;
            Jb_x = 100,
            Jb_y = 100;
            tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f)
        },
        move: function(el, J, W, bei) {
            W = W * 180 / Math.PI / 15;
            J = rad2rrad(J);
            if (bei)
                J = rad2rrad(J - Math.PI);
            J = J * 180 / Math.PI / 30 + 4;
            if (J > 8 || J < 0) {
                if (el == "sun")
                    s_f = "none";
                if (el == "moon")
                    m_f = "none";
                return
            }
            if (el == "sun")
                s_x = this.x0 + J * this.dx;
            s_y = this.y0 - W * this.dy;
            s_f = "block";
            if (el == "moon")
                m_x = this.x0 + J * this.dx;
            m_y = this.y0 - W * this.dy;
            m_f = "block";
            tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f)
        },
        ecShow: function(m, s, e, E) {
            if (m)
                m_f = "block";
            else
                m_f = "none";
            if (s)
                s_f = "block";
            else
                s_f = "none";
            if (e)
                e_f = "block";
            else
                e_f = "none";
            if (E)
                E_f = "block";
            else
                E_f = "none"
        },
        move2a: function(J1, W1, J2, W2, mr, sr) {
            var dJ = -rad2rrad(J1 - J2)
              , dW = W1 - W2
              , v = this.vs;
            dJ *= Math.cos((W1 + W2) / 2) * rad,
            dW *= rad;
            dJ = v / 32 * dJ / 60,
            dW = v / 32 * dW / 60;
            sr = v / 32 * 2 * sr / 60,
            mr = v / 32 * 2 * mr / 60;
            if (Math.abs(dJ) > 3.5 * this.dx || Math.abs(dW) > 2.5 * this.dy) {
                this.ecShow(0, 0, 0, 0);
                S_r = sr;
                S_x = this.vx;
                S_y = this.vy;
                S_f = "none";
                M_r = mr;
                M_x = this.vx + dJ;
                M_y = this.vy - dW;
                M_f = "none";
                tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f);
                return
            }
            this.ecShow(1, 1, 0, 0);
            S_r = sr;
            S_x = this.vx;
            S_y = this.vy;
            S_f = "block";
            M_r = mr;
            M_x = this.vx + dJ;
            M_y = this.vy - dW;
            M_f = "block";
            tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f)
        },
        move2b: function(J1, W1, J2, W2, mr, er, Er) {
            var dJ = -rad2rrad(J1 - J2)
              , dW = W1 - W2
              , v = this.us;
            dJ *= Math.cos((W1 + W2) / 2) * rad,
            dW *= rad;
            dJ = v / 32 * dJ / 60,
            dW = v / 32 * dW / 60;
            er = v / 32 * 2 * er / 60,
            Er = v / 32 * 2 * Er / 60,
            mr = v / 32 * 2 * mr / 60;
            if (Math.abs(dJ) > 3.5 * this.dx || Math.abs(dW) > 2.5 * this.dy) {
                this.ecShow(0, 0, 0, 0);
                return
            }
            this.ecShow(1, 0, 1, 1);
            e_x = this.vx;
            e_y = this.vy;
            e_r = er;
            E_x = this.vx;
            E_y = this.vy;
            E_r = Er;
            S_f = "none";
            M_x = this.vx + dJ;
            M_y = this.vy - dW;
            M_r = mr;
            M_f = "block";
            tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f)
        },
        move3: function(J, W, bl) {
            if (Math.abs(J) > Math.PI * 2 || Math.abs(W) > Math.PI)
                return;
            J = rad2mrad(J) / Math.PI * 180 / 45;
            W = W / Math.PI * 180 / 30 + 3;
            J = this.x0 + this.dx * J - 3;
            W = this.y0 - this.dy * W;
            if (!bl) {
                Jb_xy = new Array;
                Jb_xyjs = 0;
                Jb_xy[Jb_xyjs] = J;
                Jb_xy[Jb_xyjs + 1] = W
            }
            Jb_xy[Jb_xyjs] = J;
            Jb_xy[Jb_xyjs + 1] = W;
            tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f);
            Jb_xyjs = Jb_xyjs + 2
        },
        move4: function(el, J, W, gst) {
            W = W * 180 / Math.PI / 30 + 3;
            J = rad2mrad(J - gst) * 180 / Math.PI / 45;
            if (J > 8 || J < 0) {
                if (el == "sun")
                    s_f = "none";
                if (el == "moon")
                    m_f = "none";
                return
            } else {
                if (el == "sun")
                    s_x = this.x0 + J * this.dx;
                s_y = this.y0 - W * this.dy;
                s_f = "block";
                if (el == "moon")
                    m_x = this.x0 + J * this.dx;
                m_y = this.y0 - W * this.dy;
                m_f = "block";
                tu1.DiTu(S_x, S_y, S_r, S_f, M_x, M_y, M_r, M_f, E_x, E_y, E_r, E_f, e_x, e_y, e_r, e_f, s_x, s_y, s_f, m_x, m_y, m_f, Jb_xy, Jb_f)
            }
        },
        mark: {
            p_cls: function() {
                Jb_xy = new Array;
                return
            },
            p_save: function() {
                alert("\u6e05\u9664\u6210\u529f\uff01");
                return
            }
        }
    };
    var jxCanvas = "";
    var jxcontext = "";
    var jxCanvas_w = 400;
    var jxCanvas_h = 400;
    var dbj = "block"
      , jx_xz = "\u9ec4\u8d64\u9053"
      , jx_mc = "\u4ea4\u7ebf"
      , bj_x = 0
      , bj_y = 0
      , dbj_fillcolor = "#0000FF";
    var tu2 = {
        isInit: 0,
        eR: 120,
        x0: 240,
        y0: 240,
        jxt: function(jx_mc, bj_x, bj_y, dbj_fillcolor) {
            jxcontext.lineWidth = 1;
            jxcontext.beginPath();
            jxcontext.strokeStyle = "#007FFF";
            jxcontext.arc(this.x0, this.y0, this.eR, 0, 360);
            jxcontext.stroke();
            jxcontext.beginPath();
            jxcontext.strokeStyle = "#00FF00";
            ht.arrowTo(jxcontext, 0, 0, this.x0 - this.eR * 1.8, this.y0, this.x0 + this.eR * 1.8, this.y0);
            ht.arrowTo(jxcontext, 0, 0, this.x0, this.y0 + this.eR * 1.8, this.x0, this.y0 - this.eR * 1.8);
            jxcontext.stroke();
            jxcontext.font = "12px Palatino";
            jxcontext.fillStyle = "#000000";
            jxcontext.fillText(jx_xz, this.x0 + this.eR * 1.2 - 20, this.y0);
            jxcontext.stroke();
            if (dbj == "block") {
                jxcontext.beginPath();
                jxcontext.strokeStyle = dbj_fillcolor;
                jxcontext.arc(bj_x, bj_y, 4, 0, 360);
                jxcontext.fillStyle = dbj_fillcolor;
                jxcontext.fill();
                jxcontext.font = "12px Palatino";
                jxcontext.fillStyle = "#000000";
                jxcontext.fillText("\u5317\u6781", bj_x + 5, bj_y);
                jxcontext.stroke()
            }
        },
        init: function(can) {
            myCanvas2.style.display = "block";
            if (this.isInit)
                return;
            this.isInit = 1;
            this.w = String(can.style.width).replace(/[^0-9]/g, "");
            this.h = String(can.style.height).replace(/[^0-9]/g, "");
            jxCanvas = document.getElementById("myCanvas2");
            jxcontext = jxCanvas.getContext("2d");
            jx_xz = "\u4ea4\u7ebf";
            bj_x = this.x0;
            bj_y = this.y0 - this.eR;
            tu2.jxt(jx_xz, bj_x, bj_y, dbj_fillcolor)
        },
        line1: function(a, hd) {
            if (a.d > 1.6)
                return;
            var R = this.eR;
            var xc = a.xc
              , yc = a.yc
              , k = a.k;
            if (hd) {
                var r = sqrt(xc * xc + yc * yc)
                  , s = atan2(yc, xc) + a.ds
                  , dk = tan(a.ds);
                xc = r * cos(s);
                yc = r * sin(s);
                k = (k + dk) / (1 - k * dk)
            }
            if (!hd) {
                jx_xz = "\u8d64\u9053";
                jx_mc = "\u8d1d\u8d64\u4ea4\u7ebf";
                bj_x = this.x0;
                bj_y = -R * cos(Math.PI / 2 - a.I[1]) + this.y0;
                if (a.I[1] < Math.PI / 2)
                    dbj_fillcolor = "#00a0FF";
                else
                    dbj_fillcolor = "#000000";
                dbj = "block"
            } else {
                jx_xz = "\u9ec4\u9053";
                jx_mc = "\u8d1d\u9ec4\u4ea4\u7ebf";
                dbj = "none"
            }
            tu2.jxt(jx_xz, bj_x, bj_y, dbj_fillcolor);
            jxcontext.beginPath();
            jxcontext.strokeStyle = "#FF0000";
            jxcontext.moveTo(-1.2 * R + this.x0, -(k * (-1.2 - xc) + yc) * R + this.y0);
            jxcontext.lineTo(1.2 * R + this.x0, -(k * (1.2 - xc) + yc) * R + this.y0);
            jxcontext.stroke();
            jxcontext.font = "12px Palatino";
            jxcontext.fillStyle = "#000000";
            jxcontext.fillText(jx_mc, 1.2 * R + this.x0, -(k * (1.2 - xc) + yc) * R + this.y0);
            jxcontext.stroke()
        },
        cls_path: function() {
            tu2.init(Can2);
            dbj = "none";
            jxcontext.clearRect(0, 0, myCanvas2.width, myCanvas2.height);
            tab_jxb.style.display = "none";
            document.getElementById("Cp10_jx").value = ""
        }
    };
    var dqCanvas = "";
    var dqcontext = "";
    var dqCanvas_w = 400;
    var dqCanvas_h = 400;
    var tu3 = {
        isInit: 0,
        eR: 250,
        x0: 250,
        y0: 250,
        eth_display: "block",
        Diqiu: function(dqcontext, Ex, Ey, Er) {
            Er = Cp10_eR.value - 0;
            if (this.eth_display == "block") {
                dqcontext.lineWidth = 1;
                dqcontext.beginPath();
                dqcontext.strokeStyle = "#000f0f";
                dqcontext.arc(Ex, Ey, Er, 0, 360);
                dqcontext.fillStyle = "#FFFFF0";
                dqcontext.stroke()
            }
        },
        init: function(can) {
            dqCanvas = document.getElementById("myCanvas3");
            dqcontext = dqCanvas.getContext("2d");
            if (this.isInit)
                return;
            this.isInit = 1;
            this.w = String(can.style.width).replace(/[^0-9]/g, "");
            this.h = String(can.style.height).replace(/[^0-9]/g, "");
            Ex = this.x0;
            Ey = this.y0;
            Er = this.eR;
            tu3.Diqiu(dqcontext, Ex, Ey, Er)
        },
        lineArr: function(d) {
            d = touY.lineArr(d);
            dqcontext.beginPath();
            var c, x, y;
            for (var i = 0; i < d.length; i += 2) {
                if (d[i] == 1E7)
                    i++,
                    c = 1;
                else
                    c = 0;
                x = this.x0 + this.eR * d[i];
                y = this.y0 - this.eR * d[i + 1];
                if (c)
                    dqcontext.moveTo(x, y);
                else
                    dqcontext.lineTo(x, y)
            }
            dqcontext.stroke()
        },
        showDitu: function() {
            dqcontext.clearRect(0, 0, myCanvas3.width, myCanvas3.height);
            tu3.Diqiu(dqcontext, Ex, Ey, Er);
            dqcontext.lineWidth = 1;
            dqcontext.strokeStyle = "#808080";
            this.lineArr(ditu1);
            dqcontext.strokeStyle = "#D0D0FF";
            this.lineArr(ditu2)
        },
        drawJWQ: function(n, m) {
            dqcontext.strokeStyle = "#E0E0E0";
            var i, k, a = new Array, N = 96, pi = Math.PI;
            for (k = 0; k < m; k++) {
                for (i = 0,
                f = 0; i <= N; i++)
                    a[2 * i] = i * pi2 / N,
                    a[2 * i + 1] = (k + 1) * pi / (m + 1) - pi_2;
                this.lineArr(a)
            }
            for (k = 0; k < n; k++) {
                for (i = 0,
                f = 0; i <= N; i++)
                    a[2 * i] = k * pi2 / n,
                    a[2 * i + 1] = i * pi / N - pi_2;
                this.lineArr(a)
            }
        },
        lineNN: function(p1, n1, p2, n2) {
            if (!p1.length || !p2.length)
                return;
            if (n1 == -1)
                n1 = p1.length - 2;
            if (n2 == -1)
                n2 = p2.length - 2;
            this.lineArr([p1[n1], p1[n1 + 1], p2[n2], p2[n2 + 1]])
        },
        draw: function(F, J0, W0, eR, jb, tylx) {
            this.eR = eR;
            this.F_ = F,
            this.J0_ = J0,
            this.W0_ = W0,
            this.eR_ = eR,
            this.jb_ = jb,
            this.tylx_ = tylx;
            touY.setlx(tylx, J0, W0, jb);
            var n;
            if (tylx == 3 || (tylx == 4 || (tylx == 5 || (tylx == 6 || (jb[2] < 1 || jb[3] < 1)))))
                this.eth_display = "none";
            else
                this.eth_display = "block";
            this.showDitu();
            this.drawJWQ(24, 11);
            dqcontext.strokeStyle = "#FF00FF";
            this.lineArr(F.p1);
            this.lineArr(F.p2);
            this.lineArr(F.p3);
            this.lineArr(F.p4);
            n = F.p1.length - 2;
            this.lineNN(F.p1, 0, F.p2, 0);
            this.lineNN(F.p1, n, F.p2, n);
            n = F.p3.length - 2;
            this.lineNN(F.p3, 0, F.p4, 0);
            this.lineNN(F.p3, n, F.p4, n);
            dqcontext.strokeStyle = "#0000FF";
            this.lineArr(F.q1);
            this.lineArr(F.q2);
            this.lineArr(F.q3);
            this.lineArr(F.q4);
            dqcontext.strokeStyle = "#FF0000";
            this.lineArr(F.L0);
            dqcontext.strokeStyle = "#808080";
            this.lineArr(F.L1);
            this.lineArr(F.L2);
            dqcontext.strokeStyle = "#000000";
            this.lineArr(F.L3);
            this.lineArr(F.L4);
            dqcontext.strokeStyle = "#00F080";
            this.lineArr(F.L5);
            this.lineArr(F.L6);
            this.isDrawed = 1
        },
        draw2: function(F) {
            if (!this.isDrawed) {
                alert("\u5e95\u56fe\u672a\u753b,\u65e0\u6cd5\u663e\u793a.");
                return
            }
            tu3.draw(this.F_, this.J0_, this.W0_, this.eR_, this.jb_, this.tylx_);
            dqcontext.strokeStyle = "#3299CC";
            this.lineArr(F.p3);
            dqcontext.strokeStyle = "#000000";
            this.lineArr(F.p1);
            dqcontext.fillStyle = "rgba(0,0,0,.4)";
            dqcontext.fill();
            dqcontext.strokeStyle = "#808080";
            this.lineArr(F.p2);
            dqcontext.fillStyle = "rgba(0,0,0,.2)";
            dqcontext.fill()
        }
    };
} else {
    document.write('\x3chtml xmlns:v\x3d"urn:schemas-microsoft-com:vml"\x3e');
    document.createStyleSheet().cssText = "v\\:*{behavior:url(#default#VML)}";
    var ht_b = {
        Vel: function(s) {
            return document.createElement("\x3cv:" + s + "/\x3e")
        },
        INSel: function(el, el2) {
            el.insertBefore(el2);
            el2.style.zIndex--;
            el2.style.zIndex++
        },
        Ael: function(el, name) {
            var s;
            if (name == "xx" || "arr")
                s = "stroke";
            if (name == "txt")
                s = 'textBox  inset\x3d"5px,5px,5px,5px" style\x3d"font-size:12px"';
            if (name == "sh")
                s = 'shadow on\x3d"T" type\x3d"single" color\x3d"#b3b3b3" offset\x3d"5px,5px"';
            if (name == "ext")
                s = 'extrusion on\x3d"True" color\x3d"red" rotationangle\x3d"0,0"';
            if (name == "fill")
                s = "fill";
            var el2 = ht_b.Vel(s);
            ht_b.INSel(el, el2, name);
            return el2
        },
        ABSel: function(s) {
            return this.Vel(s + ' style\x3d"position:absolute"')
        },
        Vel2: function(s) {
            var el = this.Vel(s + ' style\x3d"position:absolute"');
            el.zindex = function(index) {
                this.style.zIndex = index
            }
            ;
            el.resize = function(w, h) {
                this.style.width = Math.round(w) + "px",
                this.style.height = Math.round(h) + "px"
            }
            ;
            el.moveto = function(x, y) {
                this.style.left = Math.round(x) + "px",
                this.style.top = Math.round(y) + "px"
            }
            ;
            el.moveto2 = function(x, y) {
                var dx = String(this.style.width).replace(/[^0-9]/g, "");
                var dy = String(this.style.height).replace(/[^0-9]/g, "");
                this.moveto(x - dx / 2, y - dy / 2)
            }
            ,
            el.movedx = function(dx, dy) {
                var x = String(this.style.left).replace(/[^0-9]/g, "") - 0;
                var y = String(this.style.top).replace(/[^0-9]/g, "") - 0;
                this.style.left = Math.round(x + dx) + "px";
                this.style.top = Math.round(y + dy) + "px"
            }
            ;
            el.setopa = function(b) {
                if (!this.fillID)
                    this.fillID = ht_b.Ael(el, "fill");
                this.fillID.opacity = b
            }
            ;
            el.setcol = function(c1, c2) {
                if (!this.fillID)
                    this.fillID = ht_b.Ael(el, "fill");
                this.fillID.color = c1;
                this.fillID.color2 = c2
            }
            ;
            el.setqb = function(qb) {
                if (!el.qbID)
                    this.qbID = ht_b.Ael(el, "xx");
                this.fillColor = qb.fillcolor;
                this.filled = qb.filled;
                this.stroked = qb.stroked;
                this.strokeColor = qb.strokecolor;
                this.strokeWeight = qb.strokeweight;
                this.qbID.dashstyle = qb.strokestyle
            }
            ;
            el.setzbx = function(cd, w, h) {
                this.coordsize = cd;
                this.style.width = Math.round(w) + "px";
                this.style.height = Math.round(h) + "px"
            }
            ;
            el.setzbx2 = function(canvas) {
                var cd = canvas.coordsize;
                this.coordsize = cd;
                cd = String(cd).split(",");
                this.style.width = cd[0] + "px";
                this.style.height = cd[1] + "px"
            }
            ;
            return el
        },
        clone: function(ob) {
            var obj = new Object;
            for (var ns in ob)
                if (typeof ob[ns] == "object")
                    obj[ns] = ht.clone(ob[ns]);
                else
                    obj[ns] = ob[ns];
            return obj
        }
    };
    var ht = {
        canvas: "",
        qb: {
            fillcolor: "#FF0000",
            filled: "true",
            stroked: "true",
            strokecolor: "#00cc00",
            strokeweight: "1px",
            strokestyle: "solid"
        },
        line: function(x1, y1, x2, y2) {
            var el = ht_b.Vel2("line");
            el.setqb(this.qb);
            el.from = Math.round(x1) + "," + Math.round(y1);
            el.to = Math.round(x2) + "," + Math.round(y2);
            ht_b.INSel(this.canvas, el);
            return el
        },
        polyLine: function(points, canvas) {
            var el = ht_b.Vel2("polyline");
            el.setqb(this.qb);
            el.points = points;
            ht_b.INSel(this.canvas, el);
            return el
        },
        textbox: function(x, y, sx, sy, txt) {
            var el = ht_b.Vel2("rect");
            el.setqb(this.qb);
            el.txtID = ht_b.ABSel('textBox inset\x3d"0px,0px,0px,0px" style\x3d"font-size:12px;font-family:\u5b8b\u4f53;text-align:left"');
            el.set = function(x, y, sx, sy, txt) {
                this.moveto(x, y);
                this.resize(sx, sy);
                this.txtID.innerHTML = txt
            }
            ;
            el.set(x, y, sx, sy, txt);
            ht_b.INSel(el, el.txtID);
            ht_b.INSel(this.canvas, el);
            return el
        },
        shape: function(path) {
            var el = ht_b.Vel2("shape");
            el.setqb(this.qb);
            el.path = path;
            el.setzbx2(this.canvas);
            var ph = String(ph).replace(/[ ,]+/g, ",");
            if (ph.substr(0, 1) == ",")
                ph = ph.substr(1, ph.length - 1);
            el.phs = ph.split(",");
            if (!ph)
                el.phs.length = 0;
            el.p_cls = function() {
                this.phs.length = 0
            }
            ;
            el.p_moveto = function(x, y) {
                var c = this.phs
                  , n = c.length;
                c[n++] = "\x3dm\x3d",
                c[n++] = Math.round(x),
                c[n++] = Math.round(y)
            }
            ;
            el.p_lineto = function(x, y) {
                var c = this.phs
                  , n = c.length;
                c[n++] = "\x3dl\x3d",
                c[n++] = Math.round(x),
                c[n++] = Math.round(y)
            }
            ;
            el.p_oval = function(x, y, sx, sy) {
                this.p_arc(x, y, sx, sy, 0, 360)
            }
            ;
            el.p_arc = function(x, y, sx, sy, jd1, jd2) {
                jd1 = Math.round(jd1 * 65536),
                jd2 = Math.round(jd2 * 65536);
                sx = Math.round(sx / 2),
                sy = Math.round(sy / 2);
                var c = this.phs
                  , n = c.length;
                c[n++] = "\x3dal\x3d";
                c[n++] = Math.round(x + sx),
                c[n++] = Math.round(y + sy);
                c[n++] = sx,
                c[n++] = sy;
                c[n++] = jd1;
                c[n++] = jd2
            }
            ;
            el.p_save = function() {
                var s = this.phs.toString();
                s = s.replace(/,=|=,/g, " ");
                s = s.replace(/=/g, "") + " e";
                this.path = s
            }
            ;
            ht_b.INSel(this.canvas, el);
            return el
        },
        quxian: function(points, qz) {
            var s = String(points).replace(/[, ]+/g, ",");
            s = s.replace(/(^,)*/g, "");
            if (qz == "q")
                s = "m " + s + " qb " + points + "r 0,0 e";
            if (qz == "z")
                s = "m " + s + " l " + points + " e";
            if (qz == "c")
                s = "m " + s + " c " + points + " e";
            return this.shape(s)
        },
        cls: function() {
            this.canvas.innerHTML = ""
        },
        group: function(x, y, canvas) {
            var el = ht_b.Vel2("group");
            el.setzbx2(this.canvas);
            ht_b.addMethod(el);
            ht_b.INSel(this.canvas, el);
            el.moveto(x, y);
            return el
        },
        rect0: function(x, y, sx, sy, na) {
            var el = ht_b.Vel2(na);
            el.setqb(this.qb);
            if (sx < 0)
                x += sx,
                sx = -sx;
            if (sy < 0)
                y += sy,
                sy = -sy;
            el.moveto(x, y);
            el.resize(sx, sy);
            ht_b.INSel(this.canvas, el);
            return el
        },
        rect: function(x, y, sx, sy) {
            return this.rect0(x, y, sx, sy, "rect")
        },
        oval: function(x, y, sx, sy) {
            return this.rect0(x, y, sx, sy, "oval")
        },
        img: function(x, y, sx, sy, src) {
            return this.rect0(x, y, sx, sy, 'image src\x3d"' + src + '"')
        },
        rrect: function(x, y, sx, sy, arc) {
            return this.rect0(x, y, sx, sy, "roundrect arcsize\x3d" + arc)
        },
        arc: function(x, y, sx, sy, a, b) {
            return this.rect0(x, y, sx, sy, 'arc startAngle\x3d"' + a + '" endAngle\x3d"' + b + '"')
        },
        point: function(x, y, s) {
            var el = this.oval(x - s / 2, y - s / 2, s, s);
            el.fillcolor = this.qb.strokecolor;
            return el
        }
    };
    var tu1 = {
        isInit: 0,
        x0: 0,
        y0: 0,
        w: 0,
        h: 0,
        dx: 0,
        dy: 0,
        diming: new Array(116.4,40,"\u5317\u4eac",131.15,46.63,"\u53cc\u9e2d\u5c71",126,46,"",119,25.4,"\u8386\u7530",91,29.7,"\u62c9\u8428",-73,41,"\u7ebd\u7ea6",151,-34,"\u6089\u5c3c",37,56,"\u83ab\u65af\u79d1",30,-20,"\u975e\u6d32\u5357\u90e8",-56,-33,"\u4e4c\u62c9\u572d"),
        init: function(can) {
            ht.canvas = can;
            if (this.isInit)
                return;
            this.isInit = 1;
            this.w = String(can.style.width).replace(/[^0-9]/g, "");
            this.h = String(can.style.height).replace(/[^0-9]/g, "");
            can.coordsize = this.w + "," + this.h;
            var x0, y0, dx, dy, vs, vx, vy, us;
            dx = this.dx = int2((this.w - this.x0) / 8.5);
            dy = this.dy = int2((this.h - this.y0) / 6.5);
            x0 = this.x0 = int2((this.w - this.dx * 8) / 2);
            y0 = this.y0 = this.h - int2((this.h - this.dy * 6) / 2);
            vs = this.vs = this.dx,
            vx = this.vx = x0 + 4 * dx,
            vy = this.vy = y0 - 3 * dy,
            us = this.us = vs / 2;
            var ditu = "m 2,212 l 58,180,121,180,128,143,150,129,130,129,99,147,92,171,74,170,42,150,122,104,175,102,230,118,223,124,192,125,215,138,405,92,413,99,411,126,445,117,422,100,590,65,639,76,606,88,724,88,741,101,818,93,942,111,1010,111,1064,126,1045,134,1003,130,1003,146,918,159,896,189,881,189,879,170,926,146,922,142,861,159,793,160,767,176,776,181,793,180,793,213,758,253,740,255,720,270,731,299,714,297,713,282,702,273,689,273,688,263,667,274,673,283,689,283,676,296,689,325,678,353,642,373,604,373,596,387,619,422,598,435,569,417,564,440,594,475,586,479,551,441,554,415,531,400,519,371,459,401,453,433,437,441,390,359,335,353,278,328,273,336,299,361,317,354,340,375,259,420,206,339,187,334,240,427,291,431,269,470,220,511,228,566,163,663,108,672,72,575,85,524,41,453,2,454,2,290,65,286,67,308,193,320,208,292,163,291,158,273,203,260,231,267,234,253,208,229,175,229,161,260,129,282,86,232,74,238,99,265,94,275,54,246,2,272,2,212 " + "m 67,54 l 115,46,154,50,155,54,119,58,100,71,67,54 m 300,96 l 321,77,385,68,388,71,315,91,327,101,317,105,300,96 m 522,45 l 547,44,592,58,573,62,550,60,522,45 m 775,75 l 780,82,808,83,818,74,806,72,775,75 " + "m 809,180 l 799,188,800,232,811,230,809,180 m 802,238 l 790,256,788,284,748,295,738,310,744,317,754,302,791,301,797,269,816,244,802,238 " + "m 686,354 l 681,357,677,365,683,371,686,354 m 544,460 l 583,487,602,515,640,527,597,528,544,460 m 662,452 l 619,482,638,507,646,507,672,484,665,469,673,460,662,452 m 680,480 l 671,513,684,514,703,479,680,480 m 747,492 l 750,504,808,532,846,537,820,507,776,494,747,492 m 635,375 l 650,382,635,390,620,385,635,375 " + "m 771,548 l 708,560,641,604,659,675,746,653,790,690,842,689,865,666,868,628,802,541,796,576,767,564,771,548 m 973,672 l 981,693,941,736,952,742,1003,693,973,672 m 282,550 l 257,571,254,619,268,619,289,564,282,550 " + "m 1092,112 l 1117,120,1119,126,1091,124,1082,130,1118,134,1091,146,1135,163,1105,176,1107,178,1140,169,1172,151,1255,160,1316,204,1322,278,1425,388,1517,419,1550,449,1579,450,1560,516,1587,566,1620,582,1593,744,1614,786,1644,785,1621,773,1643,745,1634,739,1771,605,1815,536,1815,519,1629,429,1557,442,1543,405,1522,404,1526,377,1486,392,1464,371,1477,332,1546,326,1559,351,1559,320,1618,256,1672,238,1639,204,1685,203,1699,192,1657,162,1582,146,1574,200,1502,169,1483,153,1573,108,1607,115,1607,126,1582,134,1644,145,1667,119,1559,96,1558,75,1666,31,1593,27,1334,68,1329,109,1259,112,1142,101,1092,112 " + "m 1680,39 l 1617,62,1634,77,1684,75,1734,110,1721,121,1744,151,1774,156,1788,131,1890,101,1864,88,1897,88,1906,54,1947,36,1927,36,1862,49,1892,37,1831,41,1836,33,1900,28,1833,22,1750,39,1680,39 m 1889,122 l 1884,136,1914,138,1933,130,1889,122 " + "m 1969,175 l 1959,182,1958,198,1979,192,1980,179,1969,175 m 1987,162 l 1980,172,1995,182,1976,203,2010,201,2010,180,1996,173,2002,166,1987,162 m 2010,208 l 1989,215,2001,222,2001,247,1961,249,1962,287,1999,285,2010,273,2010,208 m 2010,297 l 1980,297,1918,361,1916,415,1943,452,1970,466,2010,456,2010,297 " + "e";
            var p = ht.shape(ditu), p2;
            p.stroked = false;
            p.fillcolor = "#D0D0D0";
            p.setzbx("2009,970", this.dx * 8, this.dy * 6);
            p.moveto(this.x0, this.h - this.y0);
            p = ht.shape("");
            for (i = 0; i <= 6; i++) {
                c = y0 - i * dy;
                p.p_moveto(x0, c);
                p.p_lineto(x0 + dx * 8, c);
                if (i) {
                    p2 = ht.textbox(x0 + 2, c, 45, 15, "\x3cb\x3e" + 15 * i + "\x3c/b\x3e(" + (i > 3 ? "+" : "") + 30 * (i - 3) + ")");
                    p2.filled = false;
                    p2.stroked = false
                }
            }
            for (i = 0; i <= 8; i++) {
                c = x0 + i * dx;
                p.p_moveto(c, y0);
                p.p_lineto(c, y0 - dy * 6);
                if (i > 0 && i < 8) {
                    p2 = ht.textbox(c - 10, y0, 60, 35, "\x3cb\x3e" + 30 * (i - 4) + "\x3c/b\x3e\x3cbr\x3e(" + (i <= 4 ? 45 * i : 45 * i - 360) + ")");
                    p2.filled = false;
                    p2.stroked = false
                }
            }
            p.p_save();
            this.Sun = ht.oval(0, 0, vs, vs);
            this.Sun.moveto2(vx, vy);
            this.Sun.stroked = false;
            this.Moon = ht.oval(0, 0, vs, vs);
            this.Moon.moveto2(vx, vy);
            this.Moon.stroked = false;
            this.Moon.fillcolor = "#a0a000";
            this.Eys = ht.oval(0, 0, vs, vs);
            this.Eys.moveto2(vx, vy);
            this.Eys.stroked = false;
            this.Eys.fillcolor = "#000000";
            this.Eys.setopa(0.2);
            this.eys = ht.oval(0, 0, vs, vs);
            this.eys.moveto2(vx, vy);
            this.eys.stroked = false;
            this.eys.fillcolor = "#000000";
            this.eys.setopa(0.4);
            this.sun = ht.oval(0, 0, 7, 7);
            this.sun.moveto2(vx, vy);
            this.sun.stroked = false;
            this.moon = ht.oval(0, 0, 7, 7);
            this.moon.moveto2(vx, vy);
            this.moon.stroked = false;
            this.moon.fillcolor = "#B0A070";
            for (i = 0; i < this.diming.length; i += 3) {
                var J = this.diming[i];
                if (J < 0)
                    J += 360;
                var W = this.diming[i + 1];
                J = J / 45,
                W = W / 30 + 3;
                J = this.x0 + this.dx * J - 5;
                W = this.y0 - this.dy * W - 8;
                p = ht.textbox(J, W, 60, 16, "\x3cfont color\x3dred\x3e\u00b7\x3c/font\x3e" + this.diming[i + 2]);
                p.filled = false;
                p.stroked = false
            }
            this.mark = ht.shape("");
            this.mark.filled = false;
            this.mark.strokecolor = "#FF00FF"
        },
        move: function(el, J, W, bei) {
            W = W * 180 / Math.PI / 15;
            J = rad2rrad(J);
            if (bei)
                J = rad2rrad(J - Math.PI);
            J = J * 180 / Math.PI / 30 + 4;
            if (J > 8 || J < 0) {
                el.style.display = "none";
                return
            }
            el.style.display = "block";
            el.moveto2(this.x0 + J * this.dx, this.y0 - W * this.dy)
        },
        ecShow: function(m, s, e, E) {
            if (m)
                m = "block";
            else
                m = "none";
            this.Moon.style.display = m;
            if (s)
                s = "block";
            else
                s = "none";
            this.Sun.style.display = s;
            if (e)
                e = "block";
            else
                e = "none";
            this.eys.style.display = e;
            if (E)
                E = "block";
            else
                E = "none";
            this.Eys.style.display = E
        },
        move2a: function(J1, W1, J2, W2, mr, sr) {
            var dJ = -rad2rrad(J1 - J2)
              , dW = W1 - W2
              , v = this.vs;
            dJ *= Math.cos((W1 + W2) / 2) * rad,
            dW *= rad;
            dJ = v / 32 * dJ / 60,
            dW = v / 32 * dW / 60;
            sr = v / 32 * 2 * sr / 60,
            mr = v / 32 * 2 * mr / 60;
            if (Math.abs(dJ) > 3.5 * this.dx || Math.abs(dW) > 2.5 * this.dy) {
                this.ecShow(0, 0, 0, 0);
                return
            }
            this.ecShow(1, 1, 0, 0);
            this.Sun.resize(sr, sr);
            this.Sun.moveto2(this.vx, this.vy);
            this.Moon.resize(mr, mr);
            this.Moon.moveto2(this.vx + dJ, this.vy - dW)
        },
        move2b: function(J1, W1, J2, W2, mr, er, Er) {
            var dJ = -rad2rrad(J1 - J2)
              , dW = W1 - W2
              , v = this.us;
            dJ *= Math.cos((W1 + W2) / 2) * rad,
            dW *= rad;
            dJ = v / 32 * dJ / 60,
            dW = v / 32 * dW / 60;
            er = v / 32 * 2 * er / 60,
            Er = v / 32 * 2 * Er / 60,
            mr = v / 32 * 2 * mr / 60;
            if (Math.abs(dJ) > 3.5 * this.dx || Math.abs(dW) > 2.5 * this.dy) {
                this.ecShow(0, 0, 0, 0);
                return
            }
            this.ecShow(1, 0, 1, 1);
            this.eys.resize(er, er);
            this.eys.moveto2(this.vx, this.vy);
            this.Eys.resize(Er, Er);
            this.Eys.moveto2(this.vx, this.vy);
            this.Moon.resize(mr, mr);
            this.Moon.moveto2(this.vx + dJ, this.vy - dW)
        },
        move3: function(J, W, bl) {
            if (!bl) {
                this.mark.p_cls();
                this.mark.p_save()
            }
            if (Math.abs(J) > Math.PI * 2 || Math.abs(W) > Math.PI)
                return;
            J = rad2mrad(J) / Math.PI * 180 / 45;
            W = W / Math.PI * 180 / 30 + 3;
            J = this.x0 + this.dx * J - 3;
            W = this.y0 - this.dy * W;
            this.mark.p_moveto(J, W);
            this.mark.p_lineto(J - 3, W + 8);
            this.mark.p_lineto(J + 3, W + 8);
            this.mark.p_lineto(J, W);
            this.mark.p_save()
        },
        move4: function(el, J, W, gst) {
            W = W * 180 / Math.PI / 30 + 3;
            J = rad2mrad(J - gst) * 180 / Math.PI / 45;
            if (J > 8 || J < 0) {
                el.style.display = "none";
                return
            }
            el.style.display = "block";
            el.moveto2(this.x0 + J * this.dx, this.y0 - W * this.dy)
        }
    };
    var tu2 = {
        isInit: 0,
        eR: 120,
        x0: 240,
        y0: 240,
        init: function(can) {
            Can2.style.display = "block";
            ht.canvas = can;
            if (this.isInit)
                return;
            this.isInit = 1;
            this.w = String(can.style.width).replace(/[^0-9]/g, "");
            this.h = String(can.style.height).replace(/[^0-9]/g, "");
            can.coordsize = this.w + "," + this.h;
            this.eth = ht.oval(0, 0, this.eR * 2, this.eR * 2);
            this.eth.filled = false;
            this.eth.moveto2(this.x0, this.y0);
            var p = ht.shape(""), p2;
            p.stroke.endArrow = "classic";
            p.p_moveto(this.x0 - this.eR * 1.2, this.y0);
            p.p_lineto(this.x0 + this.eR * 1.2, this.y0);
            p.p_moveto(this.x0, this.y0 + this.eR * 1.2);
            p.p_lineto(this.x0, this.y0 - this.eR * 1.2);
            p.p_save();
            p2 = ht.textbox(this.x0 + this.eR * 1.2 - 20, this.y0, 60, 15, "\u4ea4\u7ebf");
            p2.filled = false;
            p2.stroked = false;
            this.zbTxt = p2;
            this.zxx = ht.shape("");
            this.dbj = ht.oval(0, 0, 6, 6);
            this.dbj.stroked = false;
            this.dbj.style.display = "none"
        },
        line1: function(a, hd) {
            if (a.d > 1.6)
                return;
            var p = this.zxx
              , R = this.eR;
            var xc = a.xc
              , yc = a.yc
              , k = a.k;
            if (hd) {
                var r = sqrt(xc * xc + yc * yc)
                  , s = atan2(yc, xc) + a.ds
                  , dk = tan(a.ds);
                xc = r * cos(s);
                yc = r * sin(s);
                k = (k + dk) / (1 - k * dk)
            }
            p.p_moveto(-1.2 * R + this.x0, -(k * (-1.2 - xc) + yc) * R + this.y0);
            p.p_lineto(1.2 * R + this.x0, -(k * (1.2 - xc) + yc) * R + this.y0);
            p.p_save();
            if (!hd) {
                this.zbTxt.txtID.innerHTML = innerText = "\u8d1d\u8d64\u4ea4\u7ebf";
                this.dbj.moveto2(this.x0, -R * cos(Math.PI / 2 - a.I[1]) + this.y0);
                if (a.I[1] < Math.PI / 2)
                    this.dbj.fillcolor = "#00a0FF";
                else
                    this.dbj.fillcolor = "#000000";
                this.dbj.style.display = "block"
            } else {
                this.zbTxt.txtID.innerHTML = innerText = "\u8d1d\u9ec4\u4ea4\u7ebf";
                this.dbj.style.display = "none"
            }
        },
        cls_path: function() {
            tu2.init(Can2);
            tu2.zxx.p_cls();
            tu2.zxx.p_save();
            tu2.dbj.style.display = "none";
            document.getElementById("Cp10_jx").value = ""
        }
    };
    var tu3 = {
        isInit: 0,
        eR: 250,
        x0: 250,
        y0: 250,
        init: function(can) {
            ht.canvas = can;
            if (this.isInit)
                return;
            this.isInit = 1;
            this.w = String(can.style.width).replace(/[^0-9]/g, "");
            this.h = String(can.style.height).replace(/[^0-9]/g, "");
            can.coordsize = this.w + "," + this.h;
            this.eR = Cp10_eR.value - 0;
            this.eth = ht.oval(0, 0, this.eR * 2, this.eR * 2);
            this.eth.filled = true;
            this.eth.moveto2(this.x0, this.y0);
            this.eth.strokeColor = "#0F0F0F";
            this.eth.fillcolor = "#FFFFFF";
            this.p = ht.shape(""),
            this.p.filled = false,
            this.p.strokeColor = "#E0E0E0";
            this.P1 = ht.shape(""),
            this.P1.filled = false,
            this.P1.strokeColor = "#808080";
            this.P2 = ht.shape(""),
            this.P2.filled = false,
            this.P2.strokeColor = "#D0D0FF";
            this.A = ht.shape(""),
            this.A.filled = false,
            this.A.strokeColor = "#FF6060";
            this.B = ht.shape(""),
            this.B.filled = false,
            this.B.strokeColor = "#80F080";
            this.C = ht.shape(""),
            this.C.filled = false,
            this.C.strokeColor = "#8080F0";
            this.D = ht.shape(""),
            this.D.filled = false,
            this.D.strokeColor = "#000000"
        },
        lineArr: function(d, p) {
            d = touY.lineArr(d);
            var c, x, y;
            for (var i = 0; i < d.length; i += 2) {
                if (d[i] == 1E7)
                    i++,
                    c = 1;
                else
                    c = 0;
                x = this.x0 + this.eR * d[i];
                y = this.y0 - this.eR * d[i + 1];
                if (c)
                    p.p_moveto(x, y);
                else
                    p.p_lineto(x, y)
            }
        },
        showDitu: function() {
            this.P1.p_cls();
            this.P2.p_cls();
            this.lineArr(ditu1, this.P1);
            this.lineArr(ditu2, this.P2);
            this.P1.p_save();
            this.P2.p_save()
        },
        drawJWQ: function(n, m) {
            var i, k, a = new Array, N = 96, pi = Math.PI;
            this.p.p_cls();
            for (k = 0; k < m; k++) {
                for (i = 0,
                f = 0; i <= N; i++)
                    a[2 * i] = i * pi2 / N,
                    a[2 * i + 1] = (k + 1) * pi / (m + 1) - pi_2;
                this.lineArr(a, this.p)
            }
            for (k = 0; k < n; k++) {
                for (i = 0,
                f = 0; i <= N; i++)
                    a[2 * i] = k * pi2 / n,
                    a[2 * i + 1] = i * pi / N - pi_2;
                this.lineArr(a, this.p)
            }
            this.p.p_save()
        },
        lineNN: function(p1, n1, p2, n2, A) {
            if (!p1.length || !p2.length)
                return;
            if (n1 == -1)
                n1 = p1.length - 2;
            if (n2 == -1)
                n2 = p2.length - 2;
            this.lineArr([p1[n1], p1[n1 + 1], p2[n2], p2[n2 + 1]], A)
        },
        draw: function(F, J0, W0, eR, jb, tylx) {
            this.eR = eR;
            touY.setlx(tylx, J0, W0, jb);
            var n, A = this.A, B = this.B, C = this.C, D = this.D;
            this.showDitu();
            this.drawJWQ(24, 11);
            A.p_cls();
            B.p_cls();
            C.p_cls();
            D.p_cls();
            this.lineArr(F.p1, A);
            this.lineArr(F.p2, A);
            this.lineArr(F.p3, A);
            this.lineArr(F.p4, A);
            n = F.p1.length - 2;
            this.lineNN(F.p1, 0, F.p2, 0, A);
            this.lineNN(F.p1, n, F.p2, n, A);
            n = F.p3.length - 2;
            this.lineNN(F.p3, 0, F.p4, 0, A);
            this.lineNN(F.p3, n, F.p4, n, A);
            this.lineArr(F.q1, A);
            this.lineArr(F.q2, A);
            this.lineArr(F.q3, A);
            this.lineArr(F.q4, A);
            this.lineArr(F.L0, A);
            this.lineArr(F.L1, A);
            this.lineArr(F.L2, A);
            this.lineArr(F.L3, A);
            this.lineArr(F.L4, A);
            this.lineArr(F.L5, B);
            this.lineArr(F.L6, B);
            A.p_save();
            B.p_save();
            C.p_save();
            D.p_save();
            if (tylx == 3 || (tylx == 4 || (tylx == 5 || (tylx == 6 || (jb[2] < 1 || jb[3] < 1))))) {
                this.eth.style.display = "none";
                this.eth.resize(0, 0)
            } else {
                this.eth.style.display = "block";
                this.eth.resize(this.eR * 2, this.eR * 2)
            }
            this.eth.moveto2(this.x0, this.y0);
            this.isDrawed = 1
        },
        draw2: function(F) {
            if (!this.isDrawed) {
                alert("\u5e95\u56fe\u672a\u753b,\u65e0\u6cd5\u663e\u793a.");
                return
            }
            var C = this.C
              , D = this.D;
            C.p_cls();
            D.p_cls();
            this.lineArr(F.p3, C);
            this.lineArr(F.p1, D);
            this.lineArr(F.p2, D);
            C.p_save();
            D.p_save()
        }
    };
}
