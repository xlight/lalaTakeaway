<?php
 namespace Admin\Controller; use Think\Controller; class ConfigureController extends CommonController { public function index() { goto aE528; CJ4SZ: UVaeG: goto GI01K; TY5_X: $rs["\x67\x7a\150\137\167\x79\163\161\137\x73\164\141\x74\x75\163\x31"] = "\346\xb2\xa1\346\x9c\211\xe4\xb8\x8a\344\xbc\240"; goto CJ4SZ; QvJ8t: fKHwJ: goto oJH4i; aE528: $this->mb(); goto yh2eb; V33rR: e6U5b: goto YPIDj; GI01K: $this->data = $rs; goto mlW6N; oJH4i: if ($rs["\x67\x7a\x68\x5f\167\171\x73\x71\137\x73\x74\141\x74\x75\163"] == 1) { goto Kkqkd; } goto H9seJ; pJmC6: $rs["\x67\x7a\x68\x5f\x79\167\171\155\137\x73\164\x61\x74\x75\x73\x31"] = "\xe5\xb7\262\xe4\xb8\x8a\344\xbc\xa0"; goto HtYL1; mlW6N: $this->display(); goto xZcr0; dXOzI: Kkqkd: goto TY5_X; ZCRmE: goto UVaeG; goto dXOzI; HtYL1: goto fKHwJ; goto V33rR; yh2eb: $rs = M("\x63\x6f\156\146\151\x67")->where("\165\156\151\x61\x63\151\x64\x3d" . $this->uniacid)->find(); goto ew2Pj; H9seJ: $rs["\x67\172\x68\137\x77\171\x73\161\137\163\164\x61\x74\165\x73\x31"] = "\xe5\267\xb2\xe4\xb8\x8a\344\274\240"; goto ZCRmE; YPIDj: $rs["\147\172\150\137\171\x77\171\155\137\163\164\141\164\x75\x73\61"] = "\xe6\262\xa1\xe6\x9c\211\xe4\270\x8a\xe4\274\xa0"; goto QvJ8t; ew2Pj: if ($rs["\x67\172\150\137\x79\167\x79\x6d\x5f\163\x74\x61\164\x75\x73"] == 1) { goto e6U5b; } goto pJmC6; xZcr0: } public function update() { goto lWmkt; C2tau: $hd::filePutContents($filename, $param["\x67\x7a\150\x5f\171\x77\171\155\137\x66\x69\x6c\x65\143\157\156\164\x65\156\x74"]); goto Kfk0J; ZbkvV: $hd::filePutContents($filename, $param["\x67\x7a\x68\137\x77\x79\x73\161\137\x66\x69\154\145\143\157\156\x74\145\x6e\164"]); goto UYQbT; PKBnn: $param = I("\x70\157\163\x74\56"); goto BFp8k; yCDw8: MXZ8i: goto tVDHP; klKgf: $this->success("\xe6\223\215\xe4\xbd\x9c\346\210\220\xe5\212\237"); goto IHwFS; gc3Qj: if (!$param["\x77\x78\x5f\x70\x61\171\x5f\x73\163\x6c\x6b\145\171\137\160\141\164\x68"]) { goto LECzi; } goto GnLc3; lWmkt: $this->mb(); goto qwQ4m; bBHHv: KTb8C: goto HErze; Czzan: goto wOxf4; goto EwtZP; O5ZNZ: S("\x73\x68\x6f\160\143\157\x6e\x66\151\147", null); goto PnldE; RL2ec: $hd::filePutContents($filename, $param["\167\170\137\x70\141\x79\137\x73\x73\154\x6b\x65\x79\x5f\x70\141\x74\x68"]); goto fjHlA; GnLc3: $filename = "\x2e\57\x54\x68\151\156\153\x50\x48\x50\x2f\x4c\151\x62\162\141\x72\171\x2f\x56\145\x6e\144\x6f\162\x2f\x77\x78\160\x61\171\57\x63\x65\x72\164\57\x61\x70\151\143\154\151\145\x6e\x74\137\x6b\x65\171\56\x70\x65\155"; goto RL2ec; Ss0vc: $hd::filePutContents($filename, $param["\x77\x78\x5f\x70\x61\x79\x5f\x73\163\x6c\x63\145\x72\x74\x5f\160\141\x74\150"]); goto pO12d; uAPMK: $filename = "\56\57" . $param["\x67\x7a\x68\137\x79\x77\171\x6d\137\146\151\154\x65\156\141\155\145"]; goto C2tau; SDvWb: if ($param["\x67\x7a\x68\x5f\x77\x79\x73\161\137\146\151\x6c\145\156\x61\155\x65"]) { goto MXZ8i; } goto Cft5X; d7SMk: $obj->add($param); goto XP2nP; tVDHP: $filename = "\x2e\x2f" . $param["\x67\172\150\x5f\167\171\163\x71\137\x66\151\154\x65\156\x61\155\145"]; goto ZbkvV; SjD2D: wOxf4: goto SDvWb; vayAy: if ($param["\x67\172\x68\x5f\171\x77\x79\x6d\x5f\x66\151\154\145\x6e\x61\155\x65"]) { goto rSMbb; } goto F1dxS; BFp8k: $obj = M("\x63\x6f\156\x66\x69\x67"); goto BLnBa; F1dxS: $param["\147\x7a\150\137\171\167\x79\x6d\137\x73\164\141\x74\165\x73"] = 1; goto Czzan; EwtZP: rSMbb: goto uAPMK; dcHdG: $filename = "\56\57\x54\150\151\x6e\153\x50\x48\120\x2f\x4c\151\142\x72\x61\162\x79\x2f\x56\x65\x6e\x64\x6f\x72\x2f\167\x78\160\x61\171\x2f\x63\145\x72\164\57\x61\x70\151\143\154\151\145\156\x74\137\x63\145\162\164\56\160\x65\155"; goto Ss0vc; lkmmi: $hd = new \Vendor\FileHelper(); goto rhLPp; zIu3R: oyKEy: goto klKgf; qwQ4m: if (!IS_POST) { goto oyKEy; } goto PKBnn; BLnBa: $con = M("\x63\157\156\146\151\147")->where("\x75\156\x69\141\x63\151\144\75" . $this->uniacid)->find(); goto lkmmi; Kfk0J: $param["\x67\x7a\x68\x5f\171\167\x79\155\137\x73\164\141\164\165\x73"] = 2; goto SjD2D; bmbcy: if ($con) { goto I1uWX; } goto noogK; fjHlA: LECzi: goto vayAy; qAXJT: $obj->where("\151\144\75" . $con["\x69\144"] . "\40\x61\x6e\144\40\165\x6e\x69\x61\143\151\144\75" . $this->uniacid)->save($param); goto bBHHv; noogK: $param["\165\x6e\151\141\143\151\144"] = $this->uniacid; goto d7SMk; UYQbT: $param["\x67\172\150\137\167\171\x73\x71\137\x73\164\x61\x74\x75\x73"] = 2; goto MJB2C; vSXc0: I1uWX: goto qAXJT; PnldE: $this->getConfig(); goto zIu3R; MJB2C: igGEm: goto bmbcy; g17lW: goto igGEm; goto yCDw8; Cft5X: $param["\147\172\x68\137\x77\x79\163\x71\137\163\x74\141\x74\165\x73"] = 1; goto g17lW; pO12d: DQrU8: goto gc3Qj; XP2nP: goto KTb8C; goto vSXc0; rhLPp: if (!$param["\167\170\137\x70\141\x79\x5f\x73\163\x6c\143\x65\x72\x74\x5f\160\141\x74\x68"]) { goto DQrU8; } goto dcHdG; HErze: $con = M("\x63\x6f\156\x66\x69\x67")->where("\165\x6e\151\141\x63\151\144\x3d" . $this->uniacid)->find(); goto O5ZNZ; IHwFS: } public function clearcache() { goto KS1ZN; XcqpL: $hd::deldir($filename); goto u9MSa; KS1ZN: $hd = new \Vendor\FileHelper(); goto ayNdH; ayNdH: $filename = "\56\57\101\160\160\57\122\165\x6e\164\151\x6d\x65"; goto XcqpL; u9MSa: $this->success("\xe6\270\205\xe9\x99\xa4\xe7\xbc\x93\xe5\255\230\346\x88\220\345\x8a\237"); goto K3WjR; K3WjR: } public function mb() { $mb = new IndexController(); $mb->moban(); } public function prx($arr) { goto PcSWF; PcSWF: echo "\x3c\x70\x72\x65\x3e"; goto ZQ4J7; ZQ4J7: print_r($arr); goto OoP8y; OoP8y: echo "\x3c\x2f\x70\x72\145\x3e"; goto u4lcI; u4lcI: } }