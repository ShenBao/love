前言：可直接用浏览器打开index.html文件查看网页已经查看自己修改的效果。
修改请根据下面的说明进行，懂网页编辑的应该无压力不看教程就可以自行修改了。

下面说到的文件均以文本形式打开就能进行修改，有专业工具效果更加。

修改方法：找到文件文本中对应内容，以文本形式打开，按需求自行修改就行。
建议一边修改一边测试效果，若出现错误，建议立即撤销修改(Ctrl+Z)，保存前请做好备份。

背景音乐修改：
将你准备好的因为文件放到主目录下(index.html所在的目录即主目录)，删除之前的音乐文件(renxi.mp3)，然后把你的音乐文件名字修改为：renxi.mp3即可

修改开始爱心桃旁边的文字：renxi文件夹love.js文件
ctx.fillText(" [null]", 18, 10);
双引号里面就是，自行修改就行。

修改网页下面时间文字中"第""年""月""天"等文字：renxi文件夹functions.js文件
var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
请勿胡乱修改，只按需修改中文即可，其他的请自行斟酌修改。

修改网页标题：index.html文件
<title>相识若相思?相恋似相依</title>
2个title中间的文字就是网页标题了，修改成你自己喜欢的就行。

修改距离今天的时间：index.html文件
together.setFullYear(2014,(3-1),(18-1)); //年月日
together.setHours(22);  //时
together.setMinutes(22);  //分
together.setSeconds(0);  //秒前一位
together.setMilliseconds(0);  //秒前两位
把中间的数字修改成对应的时间就行，上面表示的是2014年3月18号22时22分0秒

修改自动显示的文字、表白文字：index.html文件
<span class="say">亲爱的，我爱你，虽然你看不见我对你的告白</span><br>
<span class="say"> </span><br>
<span class="say"> 我知道我不会甜言蜜语，但是我会用行动证明一切</span><br>
<span class="say"> </span><br>
<span class="say">你说我啰嗦，有些东西因为越在乎所以越失去</span><br>
<span class="say"> </span><br>
<span class="say">因为我太爱你了，所以我失去你了</span><br>
<span class="say"> </span><br>
<span class="say">因为我太啰嗦了，所以你离开了我</span><br>
<span class="say"> </span><br>
<span class="say">虽然你看不见我的告白，但是我还是要把这些心里话说</span><br>
<span class="say"> </span><br>
<span class="say">虽然你看不见我的告白，但是我还是要把这些心里话说</span><br>
<span class="say"> </span><br>
<span class="say">虽然你看不见我的告白，但是我还是要把这些心里话说</span><br>
<span class="say"> </span><br>
<span class="say">虽然你看不见我的告白，但是我还是要把这些心里话说</span><br>
<span class="say"> </span><br>
<span class="say"> -- 爱你的午夜阳光--</span>
把文字修改成你想表达的内容就行，注意，每一行文字别太多，太多了会导致显示位置错误，很难看。想说一大堆的话那种，我只能说，这个网页不适合你。
