import { useEffect, useState } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useRouter } from 'next/router';
import Sticky from '../components/home/Sticky';
import HamburgerMenu from '../components/nav/hamburgerMenu';
import axiosBase from './axiosBase';

let mockNote1 = {
    colour: 'Yellow',
    senderName: 'Momo',
    data: '{"lines":[{"points":[{"x":155.50357398800122,"y":93.0000015966741},{"x":155.50357398800122,"y":93.0000015966741},{"x":155.50357398800122,"y":93.0000015966741},{"x":155.50357398800122,"y":93.0000015966741},{"x":155.50357398800122,"y":93.0000015966741},{"x":151.7197152570836,"y":87.3275913477274},{"x":147.89359681660557,"y":82.20479239257953},{"x":143.1777159928957,"y":76.97150417489031},{"x":140.25621906892985,"y":73.89883708477511},{"x":135.8819216711727,"y":71.13602570444563},{"x":133.29317574458085,"y":70.2695738539855},{"x":132.3666628092035,"y":70.02416733004064},{"x":126.47862338382868,"y":69.41298422445857},{"x":120.3719908665614,"y":70.99616399284294},{"x":111.22820828946891,"y":74.55070260114243},{"x":101.95221881550349,"y":79.979558154788},{"x":94.6733881016228,"y":85.56492136544242},{"x":89.28351563996955,"y":91.1273634615488},{"x":88.29531364312639,"y":92.13884260542146},{"x":85.7914445825694,"y":95.72139027558732},{"x":84.70115800425033,"y":99.18460756293335},{"x":84.19426782072875,"y":102.06071171490325},{"x":84.64112459860802,"y":104.09329639659165},{"x":86.5490047179981,"y":107.50806394537267},{"x":90.01208259815462,"y":111.86786542409256},{"x":90.91989888207398,"y":112.94335507111525},{"x":97.11900947994329,"y":116.86250073607343},{"x":104.05677012188323,"y":120.96427703101725},{"x":107.79620389833678,"y":122.48940593232187},{"x":114.69920303073249,"y":124.75342774039892},{"x":119.62428274489326,"y":126.01064881944382},{"x":122.54077689992286,"y":126.43030495542304},{"x":124.51815395173949,"y":126.61933998377523},{"x":124.51815395173949,"y":126.61933998377523},{"x":124.51815395173949,"y":126.61933998377523},{"x":124.51815395173949,"y":126.61933998377523},{"x":125.51162591905806,"y":126.6952506103853},{"x":125.51162591905806,"y":126.6952506103853},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.50744361783872,"y":126.75608703342549},{"x":126.32019621173971,"y":126.81420874357686},{"x":118.36218148953972,"y":128.95906093268783},{"x":107.3598705035953,"y":131.9505240853288},{"x":102.28223487808634,"y":133.6981938212671},{"x":99.09645196870608,"y":135.24913357540038},{"x":96.54940160843951,"y":137.41134207929156},{"x":94.84696778796781,"y":139.7609041072791},{"x":93.65345093836395,"y":141.6291471322439},{"x":91.91013014462459,"y":146.25680177185058},{"x":90.84625958447947,"y":149.23335890597508},{"x":90.28052357153803,"y":152.0768911620663},{"x":90.12634825468604,"y":153.04934336295196},{"x":90.72448346646014,"y":156.07589830582765},{"x":91.35162553515002,"y":158.16838988302823},{"x":91.87481940142042,"y":159.34503241847474},{"x":93.96757726388583,"y":161.90373853080655},{"x":98.39073507924712,"y":165.4835597260067},{"x":102.12371217009125,"y":167.8550803069555},{"x":106.75524384242033,"y":169.59401233281756},{"x":115.52412058244079,"y":170.561385297751},{"x":125.62386926210199,"y":167.98772997459946},{"x":127.9344268467769,"y":166.8129225270305},{"x":137.9254732035966,"y":161.79520421729507},{"x":146.05052686063146,"y":157.02512593701599},{"x":150.38991831103843,"y":153.51543075595134},{"x":153.76379092723218,"y":149.9177319805121},{"x":156.4632303134929,"y":147.6034649740512},{"x":156.92232840612354,"y":147.0586940275422},{"x":156.92232840612354,"y":147.0586940275422},{"x":156.92232840612354,"y":147.0586940275422},{"x":156.92232840612354,"y":147.0586940275422},{"x":159.29783442831544,"y":150.66076853229862},{"x":160.35041874380397,"y":154.16875177841442},{"x":162.38311580336185,"y":161.15909259532336},{"x":166.0192977750773,"y":170.2841527317301},{"x":170.43000625905927,"y":177.57726338838845},{"x":175.55597465808552,"y":182.29210140770277},{"x":182.4907247199239,"y":188.36480317837115},{"x":189.1660215715233,"y":192.78988963206538},{"x":194.71744740508842,"y":194.69911727402982},{"x":197.57160365595956,"y":195.2465398722362},{"x":202.5015240848239,"y":195.11040994410212},{"x":205.84474919291029,"y":193.6245434858045},{"x":209.44491105224895,"y":190.58194336137132},{"x":213.19396714988142,"y":185.26836541625534},{"x":215.01494587353852,"y":180.71411015473151},{"x":217.0146540498456,"y":175.71399345830872},{"x":217.49365012422106,"y":173.87133826053986},{"x":218.09431610761584,"y":167.97937439548733},{"x":217.6982026895989,"y":159.99508644385023},{"x":216.56042586762925,"y":155.85687658335897},{"x":216.21263969972375,"y":153.9360061811915},{"x":216.21263969972375,"y":153.9360061811915},{"x":216.0959488096725,"y":153.66782597691125},{"x":216.0959488096725,"y":153.66782597691125},{"x":216.0959488096725,"y":153.66782597691125},{"x":216.0959488096725,"y":153.66782597691125},{"x":216.0959488096725,"y":153.66782597691125},{"x":217.6483985447674,"y":155.19493865655042},{"x":224.8425215986826,"y":158.38047792732033},{"x":230.63949371538922,"y":159.95286523002972},{"x":242.5086892867026,"y":160.7364875905819},{"x":252.53045610186817,"y":159.4926674748796},{"x":260.75510400597244,"y":156.40561516565393},{"x":265.2199293398819,"y":153.28935284843388},{"x":268.6736623648768,"y":149.83051507190584},{"x":271.5816228045207,"y":144.50996138666295},{"x":273.05114792064427,"y":140.72838137160707},{"x":273.3281161895937,"y":139.82448536863558},{"x":273.90752277450616,"y":135.95587799827942},{"x":274.235956663427,"y":130.99127562521198},{"x":273.86682772877487,"y":126.98314416226702},{"x":272.97138748960157,"y":124.71954551732385},{"x":267.287307246765,"y":118.86895770483486},{"x":257.9066516323067,"y":113.09635985844557},{"x":254.1904910181752,"y":111.54281432608337},{"x":246.40860804146703,"y":109.8501665590808},{"x":238.4525809231347,"y":108.61408797909715},{"x":232.49240755119135,"y":108.24633705606395},{"x":231.49513954094772,"y":108.1971295217769},{"x":231.42159567319484,"y":108.2119090306446},{"x":230.44968291262035,"y":108.36754060228748},{"x":230.44968291262035,"y":108.36754060228748},{"x":230.44968291262035,"y":108.36754060228748},{"x":230.44968291262035,"y":108.36754060228748},{"x":235.1719252442507,"y":105.21899040559988},{"x":237.07632225834521,"y":104.06843678204038},{"x":244.18939270524874,"y":99.24496755877222},{"x":247.6568248941558,"y":95.81360184061424},{"x":249.53486853675022,"y":92.48400033469369},{"x":250.3398174596284,"y":89.82805126311246},{"x":250.91357227745007,"y":85.95677931229743},{"x":250.7373761620108,"y":82.99295035753126},{"x":248.8548460235621,"y":77.76356111315307},{"x":247.80321797541515,"y":76.27034966902998},{"x":238.69464063778085,"y":69.4071292436093},{"x":228.32011207925717,"y":66.1860622673003},{"x":219.4430852898397,"y":64.67236775432036},{"x":208.4990389053137,"y":64.91231970696178},{"x":202.32192658745797,"y":66.81979783084337},{"x":198.91062298010283,"y":68.9101074459211},{"x":198.11474520709294,"y":69.28721948639105},{"x":197.29033574472805,"y":70.13398771257118},{"x":197.29033574472805,"y":70.13398771257118},{"x":197.29033574472805,"y":70.13398771257118},{"x":197.29033574472805,"y":70.13398771257118},{"x":197.29033574472805,"y":70.13398771257118},{"x":197.29033574472805,"y":70.13398771257118},{"x":196.4101193552013,"y":68.51446212796289},{"x":194.66994872798068,"y":62.82507777357486},{"x":193.00185191616202,"y":58.70734956834669},{"x":190.51745584631007,"y":54.45396466516223},{"x":186.81956637805578,"y":49.25877458836803},{"x":186.3544433143938,"y":48.80216940332175},{"x":182.99789672090475,"y":46.940288259482045},{"x":177.3210909353945,"y":45.18290492578482},{"x":173.45501983190843,"y":44.59817901100841},{"x":170.49334093989427,"y":44.76928775982963},{"x":167.43946222825568,"y":45.306719860268046},{"x":164.89683817186528,"y":46.88777595076686},{"x":162.68162816323013,"y":48.57569757848967},{"x":159.50659719966362,"y":51.36174806377879},{"x":157.56694557985296,"y":54.57542178218597},{"x":156.02715630408062,"y":58.303002079672375},{"x":155.1222804073839,"y":64.04870058150662},{"x":155.33136135246173,"y":69.00355645522717},{"x":156.7260559698894,"y":76.07558786080563},{"x":157.80383083597619,"y":78.37743044690447},{"x":158.1221028089763,"y":79.24481700433002},{"x":158.3600392072968,"y":79.62056694019645},{"x":158.3600392072968,"y":79.62056694019645},{"x":158.74388499922273,"y":80.40610794485352},{"x":158.74388499922273,"y":80.40610794485352},{"x":158.74388499922273,"y":80.40610794485352}],"brushColor":"#e11d48","brushRadius":7},{"points":[{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.43410797621928,"y":113.72304524854798},{"x":178.50930116601933,"y":113.65626062057673},{"x":178.967448128677,"y":113.09615584540869},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.3964815717742,"y":112.40223606207952},{"x":179.00841618646913,"y":112.88425799600486},{"x":179.00841618646913,"y":112.88425799600486},{"x":178.99039120182127,"y":113.03017425203872},{"x":178.99039120182127,"y":113.03017425203872},{"x":179.07824429567637,"y":113.26120196891793},{"x":179.07824429567637,"y":113.26120196891793},{"x":179.07824429567637,"y":113.26120196891793},{"x":179.55469067424684,"y":113.3408078245874},{"x":179.55469067424684,"y":113.3408078245874},{"x":179.71273429593455,"y":113.28709692207292},{"x":180.0759206225414,"y":113.06777184835818},{"x":180.0759206225414,"y":113.06777184835818},{"x":180.0759206225414,"y":113.06777184835818},{"x":180.0759206225414,"y":113.06777184835818},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.52081753437997,"y":112.66917062709416},{"x":180.41768955990418,"y":113.10669216839422},{"x":180.41768955990418,"y":113.10669216839422},{"x":180.41768955990418,"y":113.10669216839422},{"x":180.41768955990418,"y":113.10669216839422},{"x":180.41768955990418,"y":113.10669216839422},{"x":180.41768955990418,"y":113.10669216839422},{"x":180.41768955990418,"y":113.10669216839422}],"brushColor":"#222222","brushRadius":7},{"points":[{"x":213.59673778502355,"y":179.89668030135857},{"x":213.59673778502355,"y":179.89668030135857},{"x":213.59673778502355,"y":179.89668030135857},{"x":213.59673778502355,"y":179.89668030135857},{"x":213.59673778502355,"y":179.89668030135857},{"x":214.58539145562028,"y":184.10596723042195},{"x":215.80761815475665,"y":191.06037979236862},{"x":217.7905584714633,"y":202.06341611068842},{"x":219.68003002380442,"y":211.08494581925896},{"x":223.34058152162027,"y":223.1717172528676},{"x":225.54344213885233,"y":232.11605908151571},{"x":226.72325938860277,"y":238.07614041757273},{"x":229.452867011861,"y":248.13949323208064},{"x":230.87119730479242,"y":257.0497332785621},{"x":231.27068374952174,"y":264.00657865267556},{"x":232.05547899332774,"y":271.02477660066415},{"x":232.24560179757606,"y":274.0080980028809},{"x":232.79364846307976,"y":277.06286049189384},{"x":233.02744580651992,"y":279.0280115138354},{"x":233.229504736979,"y":282.00915644096597},{"x":234.52061022660124,"y":287.12175353132864},{"x":235.10535048421568,"y":293.0195161400037},{"x":235.27421604810817,"y":296.0063773829932},{"x":235.80944011934946,"y":299.0600600193358},{"x":235.80944011934946,"y":299.0600600193358},{"x":235.80944011934946,"y":299.0600600193358}],"brushColor":"#16a34a","brushRadius":7},{"points":[{"x":224.26364646831888,"y":259.5902021022202},{"x":224.26364646831888,"y":259.5902021022202},{"x":224.26364646831888,"y":259.5902021022202},{"x":222.73391821248447,"y":257.3180731486708},{"x":219.30940076908968,"y":253.847326345651},{"x":213.83266558238577,"y":250.21208953615835},{"x":209.96848199400165,"y":247.9923937003731},{"x":204.31405911412003,"y":246.20538503143098},{"x":197.33507464239668,"y":244.13675084660005},{"x":194.44580277920028,"y":243.65623199225223},{"x":184.47208609305605,"y":242.4717330488218},{"x":174.47799254199006,"y":241.41901710689595},{"x":164.49820397938447,"y":241.11985382444502},{"x":157.4872527595278,"y":241.68091469535867},{"x":151.4979600515436,"y":241.87226814703635},{"x":140.4603444960763,"y":243.43815351527465},{"x":137.40294646311617,"y":244.12420955357518},{"x":131.34130788793735,"y":245.88449396681577},{"x":126.27262451378057,"y":247.67060003083276},{"x":123.96499182721087,"y":249.00154268562926},{"x":123.96499182721087,"y":249.00154268562926},{"x":123.15098003978294,"y":249.36588104805477},{"x":122.74385515131809,"y":249.65961461351617},{"x":122.74385515131809,"y":249.65961461351617},{"x":122.28666065469145,"y":250.1304142466909},{"x":122.28666065469145,"y":250.1304142466909},{"x":122.03134199128351,"y":252.03544760555508},{"x":122.1866702281914,"y":254.01229082628907},{"x":124.1620032427111,"y":256.75442283054207},{"x":125.9508350917838,"y":258.91750778253714},{"x":128.27801232269277,"y":260.62960015877485},{"x":129.3739294309156,"y":261.5044674321692},{"x":133.8255402566813,"y":263.41938442538026},{"x":138.66606255017177,"y":264.8594196079168},{"x":145.6581638046919,"y":266.88631483424604},{"x":150.60961806298076,"y":268.0699847398487},{"x":153.64824674535296,"y":268.92111313599804},{"x":155.73078830817906,"y":269.660954361405},{"x":156.64891358817883,"y":269.91873525504326},{"x":159.67270612719253,"y":270.8373213637594},{"x":162.68674399991332,"y":271.79207670864287},{"x":167.61990794467602,"y":273.02794771631784},{"x":173.57737477324156,"y":274.2170495990177},{"x":177.51939069318317,"y":274.60661781117705},{"x":180.50633635965124,"y":274.7749428344702},{"x":181.50405616985032,"y":274.8199086168393},{"x":184.50132466925663,"y":274.8970650724752},{"x":186.50058877439037,"y":274.93137166425055},{"x":191.52125084262943,"y":274.41177074048915},{"x":196.50419976403822,"y":274.18324975931176},{"x":200.50105007884275,"y":274.0916489393089},{"x":205.52911059776417,"y":273.48170255885884},{"x":206.51864979656798,"y":273.3858115571519},{"x":212.71200230244054,"y":271.284941027162},{"x":217.5420843153381,"y":270.5787084180373},{"x":221.57646133469413,"y":269.778360033564},{"x":223.6689260653071,"y":269.1501619481258},{"x":226.68454519543423,"y":268.20095988039395},{"x":230.7984313083396,"y":266.5160439376612},{"x":233.75522656310997,"y":265.40594164401045},{"x":234.13470873384995,"y":265.1621319788519},{"x":234.9155789575372,"y":264.775366382004},{"x":234.9155789575372,"y":264.775366382004},{"x":234.9155789575372,"y":264.775366382004},{"x":235.33724643739927,"y":264.44887523207217},{"x":235.33724643739927,"y":264.44887523207217}],"brushColor":"#16a34a","brushRadius":7}],"width":400,"height":400}',
};

let mockNote2 = {
    colour: 'Green',
    senderName: 'nolan',
    data: '{"lines":[{"points":[{"x":149.35546875,"y":124.7421875},{"x":149.35546875,"y":124.7421875},{"x":149.15980605151208,"y":128.25457155090524},{"x":149.2229589185634,"y":133.66070204385272},{"x":149.8050790410772,"y":139.87858030842358},{"x":150.35104325629953,"y":145.30195006499443},{"x":150.6466202493815,"y":147.70067707425264},{"x":150.6466202493815,"y":147.70067707425264}],"brushColor":"#7e22ce","brushRadius":7},{"points":[{"x":212.62109375,"y":123.6875},{"x":212.62109375,"y":123.6875},{"x":212.6511539919063,"y":123.84787334253402},{"x":213.56426025960144,"y":129.98172596891752},{"x":214.33009770308007,"y":133.9350733943459},{"x":215.33654589186645,"y":138.62350367156208},{"x":215.4254742817662,"y":139.06197254110302},{"x":215.4254742817662,"y":139.06197254110302}],"brushColor":"#7e22ce","brushRadius":7},{"points":[{"x":160.109375,"y":192.39453125},{"x":160.109375,"y":192.39453125},{"x":159.9505610544318,"y":195.56858898730002},{"x":159.75441248071184,"y":203.2721232747946},{"x":160.48064876664097,"y":209.50685151132595},{"x":163.0963311377035,"y":218.35916181044178},{"x":163.8743968912235,"y":220.79073020659132},{"x":166.60696834732562,"y":225.65143156611296},{"x":168.9077529353067,"y":228.56731078798336},{"x":174.86011929342322,"y":232.42362503424985},{"x":178.75856405680608,"y":233.9150043180231},{"x":182.36656958445843,"y":234.82234614201613},{"x":187.5434365320589,"y":234.8783319350705},{"x":191.75205811358634,"y":234.0955974243728},{"x":192.69958260028596,"y":233.8733944616929},{"x":196.43405192582557,"y":232.3252843704612},{"x":199.67026464221613,"y":230.46441204372374},{"x":201.66793840580422,"y":228.94228230938742},{"x":203.6325705060464,"y":226.82510533432028},{"x":206.65080501040163,"y":222.7368421265064},{"x":208.56522388339332,"y":219.361163927864},{"x":208.99590811027883,"y":218.56459750346295},{"x":209.9657819780491,"y":216.42872063167508},{"x":210.49010672940904,"y":215.01582965197326},{"x":211.10477820385634,"y":212.8332616334759},{"x":211.31205191891522,"y":212.01364685887543},{"x":211.6368205796444,"y":210.45970985218577},{"x":211.68173244100964,"y":210.23849330370348},{"x":211.68173244100964,"y":210.23849330370348}],"brushColor":"#7e22ce","brushRadius":7}],"width":400,"height":400}',
};

export default function Home() {
    const router = useRouter();
    const { CheckSession, GetUserId } = useAuth();

    const [stickies, setStickies] = useState([]);

    useEffect(() => {
        if (!CheckSession()) router.push('/login');
        axiosBase
            .post('/get-messages', { userId: GetUserId() })
            .then((response) => {
                setStickies(response.data);
            });
    }, []);

    return (
        <>
            <HamburgerMenu />
            <div className='flex flex-col items-center'>
                <p className='font-fun text-2xl my-6'>Your Stickies</p>

                <div>
                    {stickies.map((sticky, i) => (
                        <Sticky
                            key={i}
                            colour={sticky.bodyColour}
                            drawingData={sticky.body.replace(/'/g, '"')}
                            senderName={sticky.senderName}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
