<?php
 namespace Ht\Controller; use Think\Controller; class MemberController extends Controller { protected $uniacid; protected $config; protected $tid; public function __construct() { $this->uniacid = I("\x75\156\x69\141\x63\x69\144"); $this->getConfig(); } public function getConfig() { goto LLsYl; nZKph: rn1sY: goto pWhdH; qusFB: unset($config["\160\x6c\x61\164\146\157\162\x6d\137\160\x6c\141\164\x5f\x64\x6a\x5f\x70\141\163\163\145\156\147\145\x72"], $config["\160\154\x61\164\x66\157\162\155\137\x70\154\141\x74\137\x64\152\137\143\141\x72\137\157\x77\156\x65\162"], $config["\160\x6c\141\164\x66\x6f\162\155\137\160\x6c\141\164\x5f\x63\x61\x72\x5f\157\x77\x6e\145\162\61"], $config["\x70\154\x61\x74\x66\x6f\x72\155\137\160\x6c\141\164\x5f\x70\141\163\x73\x65\156\x67\145\x72\62"], $config["\x70\154\141\x74\146\x6f\x72\x6d\x5f\x70\154\141\164\x66\x6f\x72\x6d"], $config["\x70\154\x61\x74\146\157\x72\x6d\137\143\141\x72\x5f\x6f\167\x6e\x65\x72"], $config["\160\154\x61\x74\x66\157\162\155\x5f\160\x61\163\163\145\x6e\147\145\x72"], $config["\160\x6c\x61\164\x66\157\162\x6d\x5f\143\x6f\x76\145\162\137\143\x68\x61\162\x67\x65"]); goto C2Arv; KBl9e: $config["\x77\x78\137\160\x61\171\137\x61\160\160\x69\144"] = $config["\160\151\x6e\147\x63\150\145\x5f\x78\x63\170\x5f\x61\160\160\151\x64"]; goto YriSU; nRPZs: Ey_6W: goto iAU1u; G2Goa: PbJcH: goto TsKgx; lh_dw: goto mfy2q; goto vQXKj; K7pit: $config["\x70\151\x6e\147\143\x68\145\x5f\x78\x63\x78"] = array("\141\160\x70\x69\x64" => $config["\160\x69\156\x67\143\x68\145\137\x78\143\x78\137\x61\x70\x70\151\144"], "\x73\x65\143\x72\x65\x74" => $config["\x70\151\x6e\147\x63\x68\145\x5f\x78\143\170\x5f\163\x65\143\162\145\x74"]); goto bRgMs; ga8O6: egZOm: goto K7pit; RpjRO: ceafv: goto ai_px; d3uIz: $config["\167\170\137\160\141\171"] = array("\141\x70\x70\151\144" => $config["\167\x78\137\x70\141\x79\137\141\160\x70\x69\144"], "\x6d\x63\x68\151\144" => $config["\167\x78\x5f\160\x61\171\x5f\x6d\x63\x68\151\144"], "\x73\x65\x63\x72\145\143\x74\137\x6b\145\171" => $config["\x77\x78\x5f\160\x61\171\x5f\163\x65\x63\162\x65\x63\164\137\153\x65\x79"], "\x69\160" => get_client_ip(), "\163\x73\154\143\x65\162\x74\137\x70\141\x74\150" => "\x2e\x2f\124\150\151\x6e\153\120\x48\120\x2f\114\x69\x62\x72\x61\x72\x79\57\126\x65\156\144\x6f\162\57\x77\170\160\141\171\57\143\x65\162\x74\x2f\x61\160\151\x63\154\x69\145\x6e\x74\x5f\143\x65\162\164\56\x70\145\x6d", "\163\x73\x6c\153\x65\171\x5f\160\x61\164\x68" => "\x2e\x2f\124\150\151\156\153\x50\x48\x50\57\x4c\151\x62\162\141\162\171\57\x56\145\x6e\x64\x6f\x72\x2f\167\x78\x70\x61\171\x2f\143\145\162\164\57\141\x70\151\x63\x6c\151\x65\156\x74\137\x6b\145\x79\x2e\x70\x65\x6d"); goto j1UZb; LLsYl: goto Ey_6W; goto ICkms; C0m1N: goto lobG2; goto nZKph; DpgEO: ZnEnO: goto KBl9e; TCRdO: $config["\160\154\x61\164\146\157\x72\x6d"] = array("\160\x6c\141\x74\x5f\x64\152\x5f\160\x61\163\x73\x65\156\x67\145\162" => $config["\x70\x6c\x61\164\146\157\x72\155\x5f\x70\x6c\x61\x74\x5f\x64\x6a\137\160\141\x73\x73\x65\156\x67\145\x72"], "\x70\x6c\141\164\137\x64\152\137\x63\141\162\x5f\x6f\x77\x6e\x65\162" => $config["\x70\154\x61\164\x66\x6f\162\x6d\x5f\x70\154\x61\x74\137\x64\152\x5f\143\x61\162\137\157\x77\x6e\145\162"], "\x70\154\x61\x74\137\x63\x61\x72\137\157\x77\156\145\x72\61" => $config["\160\x6c\x61\x74\x66\157\x72\x6d\137\x70\x6c\x61\164\x5f\143\141\x72\x5f\x6f\x77\156\x65\x72\x31"], "\x70\154\x61\x74\137\x70\141\x73\x73\145\156\147\x65\162\62" => $config["\x70\154\x61\x74\146\x6f\x72\x6d\137\x70\x6c\x61\x74\137\160\141\x73\x73\145\x6e\147\x65\x72\x32"], "\x70\x6c\x61\164\146\x6f\x72\x6d" => $config["\160\x6c\x61\164\146\157\162\x6d\137\x70\x6c\141\164\146\x6f\x72\x6d"], "\x63\141\162\137\x6f\167\156\x65\162" => $config["\160\x6c\x61\164\146\x6f\x72\155\137\x63\x61\x72\137\157\167\x6e\145\162"], "\x70\x61\163\163\x65\x6e\x67\145\162" => $config["\160\154\x61\164\146\157\x72\x6d\x5f\x70\141\163\x73\145\x6e\147\145\162"], "\143\157\x76\x65\x72\137\143\x68\x61\162\x67\x65" => $config["\160\154\x61\x74\x66\x6f\x72\155\x5f\x63\157\x76\x65\x72\x5f\143\150\141\x72\x67\145"]); goto iXY4T; ICkms: qvl7q: goto US1Zi; rCTr9: $config["\x61\154\x69\137\163\x6d\163"] = array("\160\x72\157\144\x75\143\164" => "\104\171\163\155\x73\x61\x70\x69", "\x64\157\155\x61\151\156" => "\x64\171\x73\155\163\141\x70\x69\x2e\x61\x6c\x69\171\x75\x6e\143\x73\x2e\143\157\155", "\162\145\147\151\x6f\x6e" => "\143\156\x2d\x68\x61\156\x67\x7a\x68\157\x75", "\x65\x6e\x64\x5f\160\157\x69\156\164\x5f\156\141\155\x65" => "\x63\156\x2d\150\141\x6e\x67\x7a\150\157\165", "\153\145\x79\137\x69\144" => $config["\x61\x6c\151\137\163\x6d\x73\x5f\x6b\x65\x79\137\x69\144"], "\153\x65\171\137\163\145\143\162\x65\x74" => $config["\x61\x6c\151\x5f\x73\x6d\163\x5f\x6b\x65\171\137\163\145\143\x72\x65\x74"], "\163\x69\147\x6e\156\x61\155\x65" => $config["\141\154\151\137\163\155\x73\137\163\x69\x67\156\x6e\141\x6d\145"], "\x74\145\155\x70\154\x61\164\x65\143\157\144\145" => $config["\141\154\x69\137\x73\x6d\x73\137\x74\145\155\160\154\141\x74\145\x63\157\144\145"], "\163\155\x73\62" => $config["\141\x6c\x69\137\163\155\x73\137\163\155\x73\62"], "\x73\155\x73\x33" => $config["\x61\x6c\x69\137\163\x6d\x73\137\163\155\163\x33"], "\x73\x6d\163\x34" => $config["\141\x6c\151\137\163\155\163\137\163\155\163\64"], "\163\x6d\163\x35" => $config["\x61\x6c\151\137\163\x6d\x73\x5f\163\155\163\x35"], "\x73\x6d\x73\x36" => $config["\141\154\x69\137\x73\155\163\x5f\x73\x6d\163\x36"], "\x73\155\x73\67" => $config["\141\154\151\x5f\163\155\163\137\163\x6d\163\67"], "\163\155\163\x38" => $config["\141\154\151\x5f\163\155\163\x5f\x73\155\x73\70"], "\x73\x6d\163\x39" => $config["\x61\154\x69\x5f\x73\155\x73\137\x73\155\163\x39"], "\x73\155\163\x31\60" => $config["\141\154\151\137\x73\x6d\163\137\163\x6d\163\x31\60"], "\163\155\x73\61\61" => $config["\141\154\151\x5f\x73\x6d\x73\137\x73\155\163\61\x31"], "\163\x6d\x73\61\62" => $config["\x61\x6c\151\137\163\155\163\x5f\163\155\163\x31\x32"], "\163\x6d\163\61\63" => $config["\x61\x6c\x69\x5f\x73\x6d\x73\137\163\155\x73\61\63"], "\163\x6d\x73\x31\x34" => $config["\x61\x6c\x69\x5f\x73\x6d\x73\137\163\x6d\x73\61\64"], "\x73\155\163\x31\x35" => $config["\141\x6c\x69\x5f\163\x6d\x73\137\163\155\163\61\x35"], "\x73\155\x73\61\x36" => $config["\x61\154\x69\137\x73\x6d\x73\x5f\163\155\x73\x31\x36"], "\163\155\x73\61\67" => $config["\141\x6c\151\x5f\163\x6d\163\x5f\163\155\163\61\67"], "\x73\x6d\x73\x31\x38" => $config["\141\x6c\151\137\163\x6d\163\x5f\163\155\x73\61\70"], "\x73\x6d\163\61\x39" => $config["\x61\x6c\x69\x5f\x73\x6d\x73\x5f\x73\x6d\163\61\71"], "\x73\155\163\x32\x30" => $config["\x61\x6c\151\137\163\x6d\x73\x5f\x73\x6d\163\x32\x30"], "\163\x6d\x73\62\61" => $config["\x61\154\151\x5f\x73\x6d\x73\x5f\163\155\163\x32\x31"], "\x73\x6d\x73\x32\x32" => $config["\141\x6c\x69\x5f\x73\x6d\x73\137\163\155\x73\x32\x32"], "\163\155\x73\62\63" => $config["\141\x6c\x69\137\163\155\x73\x5f\163\155\163\62\63"]); goto dJbKQ; TBChb: S("\x73\x68\x6f\x70\x63\x6f\x6e\146\x69\147", $config); goto hy_kA; h363J: $config["\x6d\145\x6d\142\x65\162"] = array("\144\x65\x70\157\163\151\x74" => $config["\155\x65\x6d\142\x65\162\x5f\144\x65\x70\x6f\x73\x69\x74"], "\162\145\144\160\x61\x63\153\x65\x64" => $config["\x6d\145\155\x62\x65\162\137\162\145\x64\x70\141\143\153\x65\144"], "\x73\x68\x61\162\145" => $config["\155\x65\x6d\142\145\x72\x5f\x73\x68\141\x72\145"], "\x6a\x69\156\x65" => $config["\x6d\x65\x6d\x62\145\162\137\152\x69\x6e\145"], "\164\x61\x73\x6b\143\x6f\165\156\x74" => $config["\x6d\145\x6d\142\x65\162\137\x74\x61\163\153\x63\x6f\x75\156\164"]); goto lh_dw; pWhdH: C($config); goto AgZ6S; rEPqU: S3By5: goto k3NXm; qmGjS: oEYxb: goto RpjRO; AgZ6S: goto PbJcH; goto Zx2oM; G7Br4: e6Nvz: goto C0m1N; ehPG0: LsQJU: goto GRPjJ; k3NXm: unset($config["\141\x75\x74\x68\x5f\x6f\x6e"], $config["\x61\x75\x74\x68\x5f\x74\171\160\x65"], $config["\141\165\164\x68\137\x67\x72\157\165\160"], $config["\141\165\164\150\x5f\147\x72\x6f\165\160\137\x61\143\x63\x65\163\x73"], $config["\141\165\164\150\137\162\x75\154\145"], $config["\x61\165\164\150\137\x75\x73\145\x72"], $config["\156\x63\x6c\141\163\x73"], $config["\164\x6d\x70\154\137\145\x78\x63\145\160\x74\x69\x6f\156\137\146\x69\154\145"], $config["\x65\162\x72\157\x72\137\160\141\x67\x65"], $config["\164\x6d\160\154\137\x74\145\155\x70\x6c\141\x74\x65\137\x73\165\x66\x66\x69\x78"], $config["\144\145\x66\x61\x75\x6c\x74\137\x6d\157\x64\165\x6c\x65"], $config["\155\157\144\165\154\x65\137\x61\x6c\x6c\157\x77\137\154\151\163\x74"], $config["\x6d\x6f\144\165\x6c\145\x5f\144\x65\x6e\x79\x5f\x6c\151\163\164"], $config["\x75\160\x6c\x6f\x61\144\141\x64\144\x72\137\165\x70\154\x6f\x61\x64\x68\x65\141\144"], $config["\x75\160\154\x6f\x61\x64\141\x64\x64\162\x5f\141\x64\151\155\147"], $config["\x75\x70\154\157\141\144\141\144\x64\x72\137\143\x6f\x6d\x70\x6c\141\151\156"], $config["\150\x74\137\160\x61\x79\x5f\x70\x61\x74\x68\x5f\160\141\163\163\x65\x6e\x67\x65\162\x74\x61\163\153\x70\x61\x79"], $config["\150\164\137\160\141\x79\x5f\x70\141\x74\150\x5f\160\x61\163\x73\145\x6e\147\x65\162\142\x75\x79\x73\145\141\x74\160\141\171"], $config["\x68\x74\x5f\160\141\171\137\160\x61\164\x68\x5f\x63\141\x72\x6f\167\x6e\145\162\162\x65\143\150\x61\x72\147\x65\x70\x61\x79"], $config["\x77\170\x5f\160\x61\171\x5f\141\160\160\151\x64"], $config["\x77\170\137\x70\141\171\x5f\155\x63\x68\x69\144"], $config["\x77\x78\137\160\141\171\137\x73\145\x63\162\145\143\164\137\153\x65\x79"], $config["\x77\x78\x5f\x70\x61\171\x5f\151\160"], $config["\x75\x70\x74\x79\x70\145"], $config["\167\x78\137\160\x61\x79\137\x73\x73\x6c\x63\145\x72\x74\x5f\160\x61\164\150"], $config["\x77\170\137\x70\141\171\x5f\163\163\x6c\153\x65\x79\x5f\x70\141\164\150"], $config["\x70\x69\x6e\147\x63\150\145\x5f\x78\143\170\137\163\x65\x63\x72\x65\x74"], $config["\x70\151\x6e\147\143\x68\x65\137\170\143\x78\x5f\141\x70\x70\x69\144"], $config["\164\145\x6d\x70\154\145\x74\137\151\x64\x31"], $config["\x74\145\155\160\x6c\x65\164\137\151\x64\62"], $config["\164\x65\x6d\160\154\145\x74\x5f\151\144\x33"]); goto GhrYb; Qqjjs: goto LsQJU; goto rEPqU; vQXKj: mfy2q: goto twNKE; jTVmo: qm3Dy: goto d3uIz; iXY4T: goto x2vFf; goto YGryG; dJbKQ: goto qvl7q; goto nRPZs; Am8fD: goto ZnEnO; goto AhI2v; Zo5vi: goto qm3Dy; goto ehPG0; iAU1u: $config = S("\x73\150\x6f\160\x63\x6f\x6e\x66\x69\x67"); goto Qqjjs; Zx2oM: AYIwn: goto h363J; QUoTA: L0AsL: goto TBChb; C2Arv: goto egZOm; goto qmGjS; j1UZb: goto S3By5; goto ZEpBY; pTULL: goto EZzqC; goto hGTQg; hGTQg: EZzqC: goto TCRdO; Sm_M5: $config = M("\x63\157\156\x66\x69\147")->where("\165\156\151\141\x63\151\x64\x3d" . $this->uniacid)->find(); goto Am8fD; twNKE: unset($config["\x6d\145\155\142\145\x72\137\144\145\160\x6f\x73\151\x74"], $config["\155\x65\x6d\x62\x65\x72\137\162\x65\144\160\141\x63\x6b\145\x64"], $config["\x6d\x65\155\142\145\162\x5f\x73\x68\141\x72\145"], $config["\155\x65\x6d\142\x65\162\x5f\152\x69\x6e\145"], $config["\x6d\x65\155\x62\145\162\x5f\164\x61\163\153\143\157\x75\x6e\x74"]); goto pTULL; YriSU: goto AYIwn; goto jTVmo; AhI2v: x2vFf: goto qusFB; WKrqs: goto ceafv; goto G7Br4; YGryG: lobG2: goto Sm_M5; GRPjJ: if (!$config) { goto e6Nvz; } goto WKrqs; hy_kA: goto oEYxb; goto DpgEO; GhrYb: goto L0AsL; goto G2Goa; bRgMs: goto wk5yI; goto QUoTA; US1Zi: unset($config["\x61\x6c\x69\137\x73\x6d\x73\137\x70\x72\157\144\x75\143\x74"], $config["\x61\x6c\x69\137\x73\155\163\137\144\x6f\x6d\141\x69\156"], $config["\x61\x6c\151\x5f\163\155\163\137\x72\145\147\x69\x6f\156"], $config["\141\x6c\x69\137\163\x6d\163\137\145\156\144\137\x70\x6f\x69\156\x74\137\156\141\x6d\145"], $config["\x61\154\151\137\163\x6d\163\x5f\153\x65\x79\137\151\x64"], $config["\141\x6c\151\x5f\x73\x6d\x73\137\153\145\171\x5f\x73\145\143\162\145\164"], $config["\x61\x6c\x69\137\x73\x6d\163\x5f\163\x69\147\x6e\156\x61\x6d\145"], $config["\141\x6c\151\137\163\155\x73\x5f\164\145\x6d\x70\154\x61\164\145\143\157\x64\145"], $config["\x61\x6c\x69\137\163\x6d\x73\137\163\x6d\163\x32"], $config["\x61\154\151\x5f\163\x6d\163\x5f\163\155\x73\x33"], $config["\141\154\151\137\163\155\163\137\x73\x6d\x73\x34"], $config["\141\x6c\x69\137\163\x6d\x73\x5f\x73\155\163\x35"], $config["\x61\x6c\x69\x5f\163\155\x73\137\x73\155\163\66"], $config["\x61\154\151\x5f\x73\155\x73\137\x73\x6d\163\x37"], $config["\x61\x6c\151\137\163\x6d\163\x5f\163\x6d\x73\70"], $config["\x61\x6c\x69\x5f\163\x6d\x73\137\163\x6d\x73\71"], $config["\141\x6c\151\x5f\x73\x6d\163\137\x73\x6d\163\61\60"], $config["\141\x6c\151\137\x73\155\163\137\163\155\x73\x31\x31"], $config["\141\x6c\151\137\x73\x6d\x73\137\x73\x6d\x73\61\x32"], $config["\141\x6c\151\137\163\x6d\163\137\x73\x6d\x73\x31\63"], $config["\141\154\x69\137\163\x6d\x73\x5f\x73\x6d\163\x31\x34"], $config["\141\154\151\x5f\x73\x6d\x73\x5f\x73\x6d\163\61\65"], $config["\141\x6c\151\x5f\x73\x6d\x73\x5f\x73\155\163\61\66"], $config["\x61\154\x69\137\163\x6d\163\x5f\163\x6d\x73\x31\x37"], $config["\141\x6c\x69\x5f\163\155\163\x5f\x73\x6d\x73\61\70"], $config["\141\x6c\151\x5f\x73\155\163\x5f\163\x6d\x73\61\71"], $config["\141\x6c\151\137\x73\x6d\x73\137\163\x6d\163\62\x30"], $config["\141\154\x69\x5f\163\155\163\x5f\163\x6d\163\62\x31"], $config["\141\154\151\x5f\163\155\x73\137\163\x6d\163\x32\62"], $config["\141\154\151\137\163\155\163\x5f\163\x6d\x73\62\63"]); goto Zo5vi; ai_px: goto rn1sY; goto ga8O6; ZEpBY: wk5yI: goto rCTr9; TsKgx: } }