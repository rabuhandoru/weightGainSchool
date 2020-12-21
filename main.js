{
	"use strict";
	let print = console.log

	let lastNames = ["佐藤","鈴木","高橋","田中","渡辺","伊藤","山本","中村","小林","加藤","吉田","山田","佐々木","山口","松本","井上","斎藤","木村","林","清水","山崎","池田","阿部","森","橋本","山下","石川","中島","前田","藤田","小川","岡田","後藤","長谷川","村上","近藤","石井","坂本","遠藤","青木","藤井","西村","福田","太田","三浦","藤原","岡本","松田","斉藤","中川","中野","原田","小野","竹内","田村","金子","和田","中山","石田","上田","森田","原","柴田","酒井","工藤","横山","宮崎","宮本","内田","高木","安藤","谷口","大野","今井","丸山","高田","河野","藤本","小島","武田","村田","上野","杉山","増田","菅原","平野","小山","大塚","久保","千葉","松井","岩崎","野口","松尾","木下","菊地","野村","佐野","渡部","新井","杉本","大西","桜井","古川","市川","島田","小松","高野","水野","吉川","山内","西田","菊池","西川","北村","浜田","五十嵐","安田","中田","川口","平田","川崎","東","飯田","本田","久保田","吉村","辻","関","中西","福島","岩田","服部","樋口","川上","松岡","永井","山中","田口","森本","矢野","秋山","土屋","石原","松下","馬場","大橋","吉岡","松浦","小池","浅野","大久保","熊谷","荒木","野田","川村","星野","広瀬","大谷","黒田","尾崎","田辺","永田","松村","望月","堀","内藤","菅野","西山","大島","平井","岩本","片山","沢田","本間","早川","横田","荒井","岡崎","鎌田","大石","成田","小田","宮田","石橋","須藤","篠原","萩原","高山","小西","栗原","松原","伊東","三宅","福井","小沢","南","大森","奥村","片岡","内山","桑原","岡","富田","関口","松永","奥田","北川","古賀","上原","八木","吉野","白石","今村","川島","上村","小泉","中尾","青山","平山","牧野","寺田","渋谷","岡村","児玉","坂口","河合","大山","多田","小野寺","宮下","小倉","竹田","足立","小笠原","天野","村山","坂井","西","杉浦","坂田","小原","豊田","河村","武藤","角田","水谷","根本","関根","森下","中井","神田","田島","植田","塚本","佐久間","飯塚","前川","安部","浅井","山根","白井","宮川","岡部","大沢","大川","長田","堀内","稲垣","若林","松崎","榎本","森山","神谷","中沢","江口","中谷","畠山","谷","及川","細川","三上","今野","西尾","安達","田代","飯島","石塚","津田","岸本","荒川","中原","長尾","土井","本多","森川","三好","戸田","金井","米田","稲葉","岡野","村松","松山","佐伯","西岡","甲斐","星","中嶋","岩井","黒木","堤","金田","野崎","落合","堀田","泉","西野","町田","齋藤","山岸","新田","古田","徳永","黒川","滝沢","川田","山川","杉田","土田","笠原","金沢","奥山","三木","須田","梅田","村井","野中","堀江","大竹","川端","大村","岸","日高","梶原","広田","藤沢","西本","井口","向井","大木","大場","松島","竹中","榊原","藤川","吉本","川原","安井","大内","竹下","吉原","藤岡","庄司","塚田","福本","柳沢","高島","小谷","藤村","宮内","竹本","谷川","宇野","緒方","奥野","宮沢","窪田","下田","北野","栗田","石黒","亀井","長野","平川","藤野","宮原","長島","川本","茂木","三輪","下村","山村","丹羽","高井","古谷","吉沢","青柳","竹村","出口","荻野","嶋田","小森","黒沢","田原","高瀬","稲田","大城","筒井","福岡","横井","大平","宮城","大原","福永","林田","篠崎","富永","長岡","溝口","金城","山岡","平松","北原","浅田","越智","鶴田","武井","柳田","永野","大田","西沢","入江","湯浅","長沢","相馬","石山","園田","高松","堀川","二宮","臼井","手塚","沼田","川野","石崎","深沢","花田","比嘉","池上","篠田","平岡","谷本","小出","杉原","根岸","西原","笠井","瀬戸","田畑","野沢","片桐","浜口","大槻","志村","相沢","矢島","小坂","倉田","日野","福原","加納","千田","堀口","新谷","河原","松野","村瀬","徳田","菅","田上","森岡","冨田","吉井","柏木","島崎","北島","浜崎","浜野","内海","白川","中本","畑中","岩瀬","小柳","秋元","三谷","大崎","秋田","原口"]
	let femaleFirstNames = ["恵","彩夏","心優","美咲","香織","杏奈","由美","結衣","莉子","浩子","優子","愛美","心結","順子","真央","洋子","京子","美紀","結月","葵","恵子","明美","亜美","典子","菜々子","美桜","由美子","和子","彩花","美優","百花","恵美","麻衣","優奈","奈々","琴音","美香","花音","裕美","凛","紬","千夏","美結","未来","さくら","優衣","楓","愛莉","萌","麻衣子","愛","久美子","由佳","花","遥","智美","桜","明日香","彩","美智子","茜","瞳","美月","愛菜","陽菜","智子","心春","心咲","桃子","陽子","結愛","理恵","菜摘","早紀","舞","真由","あゆみ","直子","成美","ひなた","杏","千尋","美羽","真由美","凜","七海","彩乃","佳奈","未来","芽依","麻美","菜月","直美","心愛","裕子","彩香","友美","玲奈","ゆかり","純子","咲良","美穂","絵美","結菜","愛梨","沙織","幸子","陽葵","里奈","優花","詩織","めぐみ"]
	let maleFirstNames = ["歩夢","颯真","葵","剛","昇","大介","龍生","優斗","駿","輝","大翔","涼太","稔","新","翔平","哲也","浩之","健一","崇","樹","律","隆","拓海","悠真","聡","大輝","陸","優","蒼","博","颯太","達也","湊","空","優太","豊","大雅","学","健太郎","亮","匠","陽向","大和","和彦","大地","健太","拓哉","拓也","海斗","悠太","太一","健","修","颯","瑛太","陽大","大貴","勉","悠人","直人","海翔","浩一","大輔","茂","悠","陽太","博之","一輝","秀樹","浩","悠翔","智也","大樹","進","結翔","陸斗","翼","竜也","雄大","悠希","太陽","亮太","徹","蓮","翔太","朝陽","洋平","蒼空","陽翔","和也","竜","祐介","翔","浩二","康平","貴大","淳","直樹","誠","陽斗","悠斗","勝","雄太","英樹","明"]

	let translateLanguage = {
		"ja":{"weight":"体重","height":"身長","gainWeight":"増量値","name":"名前","grade":"学年","lastWeight":"先月の体重","date":"年/月","age":"年齢","bmi":"BMI","sex":"性別","male":"男子","female":"女子"},
		"en":{"weight":"体重","height":"身長","gainWeight":"増量値","name":"名前","grade":"学年","lastWeight":"先月の体重","date":"年/月","age":"年齢","bmi":"BMI","sex":"性別","male":"男子","female":"女子"},
	}


	function randomNormUniform(min,max){
		let center = (max-min)/2 + min
		return randomNorm(center,(max-min)/4)
	}

	function randomNorm(center,deviation){
		let s, i;
		s = 0;
		for(i = 0; i < 12; i++) {
			s += Math.random();
		}
		return center + (s - 6) * deviation;
	}

	function getBrowserLang(){
		let lang = (window.navigator.languages && window.navigator.languages[0]) ||
		window.navigator.language ||
		window.navigator.userLanguage ||
		window.navigator.browserLanguage;

		if (lang=="ja-JP"){
			lang="ja"
		}
		
		if (lang!="ja"){
			lant = "en"
		}

		return lang

	}

	function sortOfKey(l,key){
		if (l[0][key]){
			l.sort(function(a,b){
				if(a[key] < b[key]) return -1;
				if(a[key] > b[key]) return 1;
				return 0;
			});
			return l
		}else{
			return l
		}
	}


	function orgRound(value, base){
		return Math.round(value * (10**base)) / (10**base)
	}


	let range = n => [...Array(n).keys()];

	let str = String

	let toString = Object.prototype.toString;
	function typeOf(obj) {
		return toString.call(obj).slice(8, -1).toLowerCase();
	}

	function int(str,int=10){
		return parseInt(str,int)
	}

	function len(l){
			return l.length
	}

	function reversed(l){
			return l.reverse()
	}
	function enumerate(l){
			return l.entries()
	}
	function clamp(x, min, max){
		if (x < min){
			x = min
		} else if (x > max){
			x = max
		}
		return x
	}

	function randomRandInt(min,max){
			return Math.round(Math.random() * (max-min) + min)
	}


	function randomUniform(min,max){
			return Math.random() * (max-min) + min
	}

	function randomChoice(i_ary){
		let aryKeys = Object.keys(i_ary);
		let index = aryKeys[Math.floor(Math.random() * aryKeys.length)];
		return i_ary[index];
	}

	function removeIds(l,ids){

		ids.sort(function(a,b){
			if( a > b ) return -1;
			if( a < b ) return 1;
			return 0;
		});
		for (const i in ids) {
			l.splice(i,1)
		}
		return l
	}



//	function dictToTable(title,dicts,keys){
	function dictToTable(){



		if (arguments.length % 5 != 0){
			print("引数の数が合いません")
			return
		}

		let div = document.getElementById("subDiv");
		removeAllChild("subDiv")


//		for (const [i,arg] of enumerate(arguments)){
		for (let i = 0; i < arguments.length; i+=5) {
			let title=arguments[i]
			let dicts=arguments[i+1]
			let keys=arguments[i+2]
			let sortKey=arguments[i+3]
			let sortOrder=arguments[i+4]


			if (!Array.isArray(dicts)){
				dicts = [dicts]
			}

			if (!keys || keys.length==0){
				keys=object.keys(dicts)
			}




			dicts = sortOfKey(dicts,sortKey)
			if (sortOrder!=0){
				dicts = reversed(dicts)
			}

			let p = document.createElement("p");
			p.appendChild(document.createTextNode(title))
			div.appendChild(p);

//			if (len(dicts)!=1){
//				let el = document.createElement("select");
//				el.onclick =  sortChange;
//				for ( const key of keys){
//					addOption(el,translateLanguage[language][key],key)
//				}
//				div.appendChild(el);
//			}

			let tbl = document.createElement("table");
			let tblBody = document.createElement("tbody");

			let row = document.createElement("tr");


			for (const key of keys){
				let cell = document.createElement("td");
				let cellText = document.createTextNode(translateLanguage[language][key]);

				let aTag = document.createElement("a");
				aTag.href = "javascript:void(0)";
				aTag.onclick = sortChange
				aTag.value = key
				aTag.num = i
				aTag.appendChild(cellText);
				cell.appendChild(aTag);
				row.appendChild(cell);
			}

			tblBody.appendChild(row);

			for (const [num,dict] of enumerate(dicts)){
				let row = document.createElement("tr");

				for (const key of keys){
					let cell = document.createElement("td");
					let txt = ""
					if (key=="height"){
						txt = orgRound(dict[key],1).toFixed(1)+"cm"
					}else if (key=="weight"){
						txt = orgRound(dict[key],1).toFixed(1)+"kg"
					}else if ( (key=="gainWeight") || (key=="lastWeight") ){
						txt = orgRound(dict[key],1).toFixed(1)+"kg"
					}else if (key=="grade"){
						txt = dict[key]+1
					}else if (key=="date"){
						txt = str(Math.floor(dict[key]/12))+"年"+str((dict[key]+3)%12+1)+"月"
					}else if (key=="age"){
						txt = str(Math.floor(dict[key]))+"歳"
					}else if (key=="sex"){
						txt = translateLanguage[language][dict[key]]
					}else{
						if (typeOf(dict[key])=="number"){
							txt = dict[key].toFixed(1)
						}else{
							txt = dict[key]
						}
					}
					let cellText = document.createTextNode(txt);
					cell.appendChild(cellText);
					row.appendChild(cell);
				}

				tblBody.appendChild(row);
			}

			tbl.appendChild(tblBody);
			div.appendChild(tbl);
			tbl.setAttribute("border", "1");
		}
	return arguments
	}

	function sortChange(){
//		print(this.value)
		if (this.value != lastSortKey){
			sortOrder = 0
		}
		lastTableArguments[this.num+3] = this.value
		lastTableArguments[this.num+4] = sortOrder
		lastTableArguments = dictToTable(...lastTableArguments)
		sortOrder=~sortOrder
		lastSortKey = this.value
	}

	function changeSelect(){
		if (students[this.value]){
			lastTableArguments = dictToTable(
				students[this.value][0].name,students[this.value],["date","age","height","weight"],"",0
			)
		}else{
			lastTableArguments = dictToTable(
				`${int(this.value)+1}年生一覧`,school.groups[this.value].students,["name","age","sex","height","weight","bmi"],"age",0
			)
		}
	}

	function updateTimeTxt(y,m){
		let text = str(y)+"年目"+str(((m+2)%12)+1)+"月"
		document.getElementById("time").innerHTML=text;
	}


	function removeAllChild(elemId){
		let elem = document.getElementById(elemId);
		if (elem){
			while( elem.firstChild ){
				elem.removeChild( elem.firstChild );
			}
		}
	}

	function removeSelect(selectId){
		let select = document.getElementById(selectId);
		if (select){
			select.remove()
		}
	}

	function createSelect(selectId){

		var el = document.createElement("select");
		el.setAttribute("id",selectId);
//		el.onchange =  changeSelect;
		el.onclick =  changeSelect;
		var div = document.getElementById(selectId+"div");
		var child = document.getElementById("lastBr");
		div.appendChild(el);
	}

	function removeAllOption(selectId){
		let select = document.getElementById(selectId);
		let options = select.options

		while( select.firstChild ){
			select.removeChild( select.firstChild );
		}
	
	}
	function addOption(target,text,value) {
		let el
		if (typeOf(target)=="string"){
			el = document.getElementById(target);
		}else{
			el = target
		}
		let option = document.createElement("option");
		option.text = text;
		option.value = value;
		el.appendChild(option);
	}

	function selectSelect(selectId,value) {
		document.getElementById(selectId).selectedIndex = value;
	}

	class School{
		constructor(){
			this.id = 0
			this.week = 0
			this.year = 0
			this.groups = []
		}

		makeGroup(num=30,sexs=["male","female"]){
			this.groups.unshift( new Group(num,sexs))
			for (const s of this.groups[0].students){
				s.id = this.id
				this.id++
			}

			if (len(this.groups)>3){
				this.groups.splice(3,1)
			}
		}

		nextWeek(){
			this.week+=1

			for (const g of this.groups){
				g.nextWeek()
			}
		}
		calcWeightAverage(){
			let buf = 0
			let count = 0
			for (const g of this.groups){
				for (const s of g.students){
					buf += s.weight
					count ++
				}
			}
			return buf / count
		}
	}
	class Group{
		constructor(num=30,sexs=["male","female"]){
			this.students = []
			this.year = 0
			this.week = 0
			let add = num % len(sexs)
			let numLoops = []
			for ( const i of sexs ){
				numLoops.push( Math.floor(num / len(sexs)) )
			}
			numLoops[numLoops.length-1]+=add

			for (const [i, sex] of sexs.entries())
				for (const j of range(numLoops[i])){
					this.students.push( new Student(sex))
			}
		}


		addStudent(num=1,sexs=["male","female"]){
			let add = num % len(sexs)
			let numLoops = []
			for ( const i of sexs ){
				numLoops.push( Math.floor(num / len(sexs)) )
			}
			numLoops[numLoops.length-1]+=add


			for (const [i, sex] of sexs.entries()){
				for (const j of range(numLoops[i])){
					this.students.push( new Student(sex))
				}
			}
		}

		calcWeightAverage(){
			let buf = 0
			for (const s of this.students){
				buf += s.weight
			}
			return buf / this.students.length
		}

		nextWeek(){
			for ( const s of this.students){
				s.nextWeek()
			}
			this.week+=1

			this.year=Math.floor(this.week/(12*4))
		}
	}

	class Student{



		constructor( sex="male" ){
			this.id = 0
			this.age = 15
			this.week = 0
			this.sex = sex
			this.date = 0
			this.grade = 0

			this.birthWeek = randomRandInt(0,12*4-1)

			let firstName
			let growWeightCap
			let growHeightCap

			if (this.sex == "female"){

				this.heightCenter = 157.2
				this.weightCenter = 52.2

				growWeightCap = 3

				growHeightCap = 3

				firstName = randomChoice(femaleFirstNames)

			}else{
				this.heightCenter = 168.3
				this.weightCenter = 60.1

				growWeightCap = 4

				growHeightCap = 10

				firstName = randomChoice(maleFirstNames)
			}
			let lastName = randomChoice(lastNames)

			this.name = lastName + firstName


			this.height = randomNorm(this.heightCenter,6)
			let heightRatio = this.height / this.heightCenter
			this.weight = randomNorm(this.weightCenter * heightRatio,2) - 4

			this.targetHeight = Math.random() * growHeightCap + this.height
			heightRatio = this.height / this.heightCenter
			this.targetWeight = this.weight + growWeightCap * Math.random()

			this.addValueHeight = (this.targetHeight-this.height) / (( 3 * 12 * 4) - this.week)
			this.addValueWeight = (this.targetWeight-this.weight) / (( 3 * 12 * 4) - this.week)

			this.bmi = this.weight / ((this.height/100) ** 2)
		}

		nextWeek(){
			if (this.week%(12*4)==this.birthWeek){
				this.age++
			}



			this.height += this.addValueHeight
			this.weight += this.addValueWeight

			if ( this.week < (3 * 12 * 4) ){
				this.addValueWeight = (this.targetWeight-this.weight) / (( 3 * 12 * 4) - this.week)
			}
			this.week += 1

			this.bmi = this.weight / ((this.height/100) ** 2)
//			if (this.week%(4*12)==0){
//				this.grade++
//			}
		}
	}


	function nextManthButtonClick(){
		let element = document.getElementById( "groupWeight" ) ;
		if ( element.checked ) {
			groupAverageFlag = true
		} else {
			groupAverageFlag = false
		}

		element = document.getElementById( "schoolWeight" ) ;
		if ( element.checked ) {
			schoolAverageFlag = true
		} else {
			schoolAverageFlag = false
		}


		let studentNum = document.getElementById("studentNum").value


		let sex = document.getElementById("sexSelect").value

		let sexs = []
		if (sex=="male"){
			sexs.push("male")
		}else if(sex=="female"){
			sexs.push("female")
		}else if(sex=="maleAndFemale"){
			sexs.push("male")
			sexs.push("female")
		}

		let schoolAverageWeight
		let groupAverageWeight

		let manthStartFlag=false
		let yearStartFlag=false

		let bestGain = {"grade":0,"name":"","height":0,"lastWeight":0,"weight":0,"gainWeight":0}
		let studentsManth = []

//		if (manth%==0){
//			manthStartFlag=true
//		}
		if (manth==0){
			yearStartFlag=true
		}


		if (yearStartFlag){
			school.makeGroup(studentNum,sexs)

			for ( const [gNum,g] of enumerate(school.groups)){
				removeSelect("year"+g.year)
				createSelect("year"+g.year)
				removeAllOption("year"+g.year)
				addOption("year"+g.year,str(g.year+1)+"年生",gNum)
				for ( const s of g.students){
					s.grade=gNum
					let sexStr=""
					if (s.sex=="male"){
						sexStr = "くん"
					}else{
						sexStr = "さん"
					}
					addOption("year"+g.year,s.name+sexStr,s.name+s.id)
				}
			}
		}

		for ( const [gNum,g] of enumerate(school.groups)){
			selectSelect("year"+g.year,0)
			for ( const s of g.students){
				studentsManth.push(s)
				if (!students[s.name+s.id]){
					students[s.name+s.id] = []
				}else{
					let diff = s.weight - students[s.name+s.id][students[s.name+s.id].length - 1]["weight"]
					if (diff > 0){
						if (bestGain["gainWeight"] < diff){
							bestGain["gainWeight"] = diff
							bestGain["weight"] = s.weight
							bestGain["name"] = s.name
							bestGain["height"] = s.height
							bestGain["lastWeight"] = students[s.name+s.id][students[s.name+s.id].length - 1]["weight"]
							bestGain["sex"] = s.sex
							bestGain["grade"] = gNum
						}
					}
				}
//				students[s.name+s.id].push({"height":s.height,"weight":s.weight,"name":s.name,"date":year*12+manth,"age":s.age})
				s.date = year*12+manth
				students[s.name+s.id].push(JSON.parse(JSON.stringify(s)))
			}
		}
		if (bestGain["gainWeight"]!=0){
			let sexStr = ""
			if (bestGain.sex=="male"){
				sexStr="くん"
			}else{
				sexStr="さん"
			}
//			lastTableArguments = dictToTable(`今月一番体重が増えたのは${bestGain.grade+1}年生の${bestGain.name}${sexStr}です`,bestGain,["grade","name","height","lastWeight","weight","gainWeight"],"",0)
		}
		for (const week of range(4)){
			schoolAverageWeight = school.calcWeightAverage()
			for ( const [gNum,g] of enumerate(school.groups)){
				groupAverageWeight = g.calcWeightAverage()
				for ( const s of g.students){
					if (schoolAverageFlag){
						if (schoolAverageWeight>s.weight){
							s.targetWeight += (schoolAverageWeight-s.weight)/(4*12)
						}
					}
					if (groupAverageFlag){
						if (groupAverageWeight>s.weight){
							s.targetWeight += (groupAverageWeight-s.weight)/(4*12)
						}
					}
				}
			}
			school.nextWeek()
		}



		manth++
		if (manth==12){
			manth=0
			year++
		}
		updateTimeTxt(year,manth)
		lastTableArguments = dictToTable(
			"全生徒",studentsManth,["name","grade","age","sex","height","weight","bmi"],"",0
		)
		yearStartFlag=false
	}


	let school = new School()

	let sex
	let name

	let students = {}

	let week=0
	let manth=0


	let dt = new Date();

	let year = dt.getFullYear();
	updateTimeTxt(year,0)

	let groupAverageFlag=false
	let schoolAverageFlag=false

	document.getElementById("sexSelect").selectedIndex = 0;


	let language = getBrowserLang()

	let lastTableArguments = []
	let lastSortKey = ""

	let sortOrder = 0
}

