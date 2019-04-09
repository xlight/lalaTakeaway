<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>
<ul class="nav nav-tabs">
	<li <?php  if($operation == 'display') { ?>class="active"<?php  } ?>><a href="<?php  echo $this->createWebUrl('goods', array('op' => 'display'))?>">商品管理</a></li>
	<li <?php  if($operation == 'post') { ?>class="active"<?php  } ?>><a href="<?php  echo $this->createWebUrl('goods', array('op' => 'post'))?>"><?php  if(empty($item['id'])) { ?>添加商品<?php  } else { ?>编辑商品<?php  } ?></a></li>
	<li><a href="<?php  echo $this->createWebUrl('gcat')?>">商品分类</a></li>
	<li><a href="<?php  echo $this->createWebUrl('gcat', array('op' => 'post'))?>">添加商品分类</a></li>
</ul>
<?php  if($operation == 'post') { ?>
<div class="main">
	<form action="" method="post" class="form-horizontal form" enctype="multipart/form-data" id="form1">
		<div class="panel panel-default">
			<div class="panel-heading">
				<?php  if(empty($item['id'])) { ?>添加商品<?php  } else { ?>编辑商品<?php  } ?>
			</div>
			<div class="panel-body">
				<ul class="nav nav-tabs" id="myTab" role="tablist">
					<li class="active" role="presentation"><a aria-expanded="true" aria-controls="tab_basic" data-toggle="tab" role="tab" href="#tab_basic">基本信息</a></li>
					<li role="presentation"><a aria-expanded="true" aria-controls="tab_option" data-toggle="tab" role="tab" href="#tab_option">商品规格</a></li>
					<li role="presentation"><a aria-expanded="true" aria-controls="tab_des" data-toggle="tab" role="tab" href="#tab_des">商品详情</a></li>
					<li role="presentation"><a aria-expanded="true" aria-controls="tab_spec" data-toggle="tab" role="tab" href="#tab_spec">特殊属性</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane  active" id="tab_basic"><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('web/goods_basic', TEMPLATE_INCLUDEPATH)) : (include template('web/goods_basic', TEMPLATE_INCLUDEPATH));?></div>
					<div class="tab-pane" id="tab_option"><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('web/goods_option', TEMPLATE_INCLUDEPATH)) : (include template('web/goods_option', TEMPLATE_INCLUDEPATH));?></div>
					<div class="tab-pane" id="tab_des">
						<div class="panel-body">
							<div class="form-group">
								<label class="col-xs-12 col-sm-2 control-label">商品详情</label>
								<div class="col-sm-10 col-xs-12">
									<?php  echo tpl_ueditor('des', $item['des']);?>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane" id="tab_spec">
						<div class="panel-body">
							<div class="form-group">
								<label class="col-xs-12 col-sm-3 col-md-2 control-label">下单必填自定义字段</label>
								<div class="col-sm-9 col-xs-12">
									<label class="radio-inline"><input type="radio" name="autofield" value="0" <?php  if($item['autofield'] == 0) { ?>checked="true"<?php  } ?> /> 关闭</label>
									&nbsp;&nbsp;&nbsp;
									<label class="radio-inline"><input type="radio" name="autofield" value="1" <?php  if($item['autofield'] == 1) { ?>checked="true"<?php  } ?> /> 身份证</label>
									<!--&nbsp;&nbsp;&nbsp;
									<label class="radio-inline"><input type="radio" name="autofield" value="2" <?php  if($item['autofield'] == 2) { ?>checked="true"<?php  } ?> /> 微信号</label>-->							
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-xs-12 col-sm-3 col-md-2 control-label">支持单品购买</label>
								<div class="col-sm-9 col-xs-12">
									<label class="radio-inline"><input type="radio" name="canddbuy" value="0" <?php  if($item['canddbuy'] == 0) { ?>checked="true"<?php  } ?> /> 不支持</label>
									&nbsp;&nbsp;&nbsp;
									<label class="radio-inline"><input type="radio" name="canddbuy" value="1" <?php  if($item['canddbuy'] == 1) { ?>checked="true"<?php  } ?> /> 支持</label>						
									<span class="help-block" style="color:red;">表示在商品详情页里，是否显示立即购买按钮</span>
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-xs-12 col-sm-3 col-md-2 control-label">支持无数据小区</label>
								<div class="col-sm-9 col-xs-12">
									<label class="radio-inline"><input type="radio" name="shownoxq" value="0" <?php  if($item['shownoxq'] == 0) { ?>checked="true"<?php  } ?> /> 不支持</label>
									&nbsp;&nbsp;&nbsp;
									<label class="radio-inline"><input type="radio" name="shownoxq" value="1" <?php  if($item['shownoxq'] == 1) { ?>checked="true"<?php  } ?> /> 支持</label>						
									<span class="help-block" style="color:red;">表示当小区里没有正在抢购活动时显示</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group col-sm-12">
			<input type="submit" name="submit" value="提交" class="btn btn-primary col-lg-1" />
			<input type="hidden" name="token" value="<?php  echo $_W['token'];?>" />
		</div>
	</form>
</div>
<?php  } else if($operation == 'display') { ?>

<div class="main">
	<div class="panel panel-info">
	<div class="panel-heading">筛选</div>
	<div class="panel-body">
		<form action="./index.php" method="get" class="form-horizontal" role="form">
			<input type="hidden" name="c" value="site" />
			<input type="hidden" name="a" value="entry" />
			<input type="hidden" name="m" value="cy163_salesjl" />
			<input type="hidden" name="do" value="goods" />
			<input type="hidden" name="op" value="display" />
			<div class="form-group">
				<label class="col-xs-12 col-sm-2 col-md-2 control-label">商品关键字</label>
				<div class="col-xs-12 col-sm-4">
					<input class="form-control" name="keyword" id="" type="text" value="<?php  echo $_GPC['keyword'];?>">
				</div>
				<div class="col-xs-12 col-sm-4">
					<button class="btn btn-default"><i class="fa fa-search"></i> 搜索</button>
				</div>
			</div>
		</form>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-body table-responsive">
		<form action="" method="post">
		<table class="table table-hover">
			<thead class="navbar-inner">
				<tr>
					<th style="width:8%;">排序</th>
					<th style="width:40%;">商品</th>
					<th style="width:5%;">库存</th>
					<th style="width:10%;">售价</th>
					<th style="width:10%;">代理价</th>
					<th style="text-align:right;">操作</th>
				</tr>
			</thead>
			<tbody>
				<?php  if(is_array($list)) { foreach($list as $item) { ?>
				<tr>
					<td><input class="form-control" name="displayorder[<?php  echo $item['id'];?>]" value="<?php  echo $item['displayorder'];?>" type="text"></td>
					<td>
						<img src="<?php  echo tomedia($item['thumb']);?>" width="30" height="30" />
						<?php  echo $item['title'];?>
					</td>
					<td><?php  echo $item['total'];?></td>
					<td>
						<span class="label label-success"><?php  echo $item['normalprice'];?></span>
					</td>
					<td>
						<span class="label label-info"><?php  echo $item['dailiprice'];?></span>
					</td>
					<td style="text-align:right;">
						<a href="<?php  echo $this->createWebUrl('goods', array('id' => $item['id'], 'op' => 'post'))?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="编辑"><i class="fa fa-pencil"></i></a>
						<a href="<?php  echo $this->createWebUrl('goods', array('id' => $item['id'], 'op' => 'delete'))?>" onclick="return confirm('删除活动将删除所有活动中的商品数据，确认删除？');return false;" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="删除"><i class="fa fa-times"></i></a>
					</td>
				</tr>
				<?php  } } ?>
				<tr>
					<td colspan="7">
						<input name="submit" class="btn btn-primary" value="提交排序" type="submit">
						<input name="token" value="<?php  echo $_W['token'];?>" type="hidden">
					</td>
				</tr>
			</tbody>
		</table>
		</form>
	</div>
	</div>
	<?php  echo $pager;?>
</div>
<?php  } ?>
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>