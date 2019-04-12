<?php defined('IN_IA') or exit('Access Denied');?><?php  include itemplate('public/header', TEMPLATE_INCLUDEPATH);?>
<div class="page clearfix">
	<h2>微信模板消息</h2>
	<form class="form-horizontal form form-validate" id="form1" action="" method="post" enctype="multipart/form-data">
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">外卖订单通知顾客</label>
			<div class="col-sm-9 col-xs-9 col-md-9">
				<input type="text" class="form-control" name="wechat[public_tpl]" value="<?php  echo $wechat['public_tpl'];?>" required>
				<div class="help-block">*模板编号AT0009,关键词(订单号码,订单类型,订单状态,联系人姓名,联系人手机号,支付时间,支付金额,订单编号)
				</div>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">帖子被评论通知</label>
			<div class="col-sm-9 col-xs-9 col-md-9">
				<input type="text" class="form-control" name="wechat[tiezi_tpl]" value="<?php  echo $wechat['tiezi_tpl'];?>" required>
				<div class="help-block">*模板编号AT1803,关键词(评论内容、评论人、评论时间、帖子内容)
				</div>
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-9 col-xs-9 col-md-9">
				<input type="hidden" name="wechat[token" value="<?php  echo $_W['token'];?>">
				<input type="submit" value="提交" class="btn btn-primary">
			</div>
		</div>
	</form>
</div>
<?php  include itemplate('public/footer', TEMPLATE_INCLUDEPATH);?>