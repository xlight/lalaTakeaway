<?php defined('IN_IA') or exit('Access Denied');?><style>
.oooo input{width:100px;}
</style>
<div class="panel-body table-responsive oooo" style="padding:0px;">
	<div class="alert alert-danger">*如有商品规格改变，请到对应的活动中先下架该商品再进行添加</div>
	<table class="table table-hover">
		<thead>
		<tr>
			<th width="10%">规格名称</th>
			<th width="10%">库存</th>
			<th width="10%">售价</th>
			<th width="10%">代理价</th>
			<th width="10%">成本价</th>
			<th width="10%">市场价</th>
			<th width="10%">限购</th>
			<th></th>
		</tr>
		</thead>
		<tbody id="option-items">
			<?php  if(is_array($options)) { foreach($options as $p) { ?>
			<tr>
				<td>
					<input name="option_title[]" type="text" class="form-control option_title" value="<?php  echo $p['title'];?>"/>
					<input name="option_id[]" type="hidden" class="form-control" value="<?php  echo $p['id'];?>"/>
				</td>
				<td><input name="option_stock[]" type="text" class="form-control option_stock" value="<?php  echo $p['stock'];?>"/></td>
				<td><input name="option_normalprice[]" type="text" class="form-control option_normalprice" value="<?php  echo $p['normalprice'];?>"/></td>
				<td><input name="option_dailiprice[]" type="text" class="form-control option_dailiprice" value="<?php  echo $p['dailiprice'];?>"/></td>
				<td><input name="option_chengbenprice[]" type="text" class="form-control option_chengbenprice" value="<?php  echo $p['chengbenprice'];?>"/>
				<td><input name="option_scprice[]" type="text" class="form-control option_scprice" value="<?php  echo $p['scprice'];?>"/>
				<td><input name="option_xiangounum[]" type="text" class="form-control option_xiangounum" value="<?php  echo $p['xiangounum'];?>"/>
				<td><a href="javascript:;" onclick="deleteoption(this)" style="margin-top:10px;" title="删除"><i class='fa fa-remove'></i></a></td>
			</tr>
			<?php  } } ?>
		</tbody>
		<tbody>
			<tr>
				<td colspan="8">
					<a href="javascript:;" id='add-option' onclick="addoption()" style="margin-top:10px;"  title="添加规格"><i class='fa fa-plus'></i>添加规格</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<script language="javascript">
	function addoption() {
		var url = "<?php  echo $this->createWebUrl('option')?>";
		$.ajax({
			"url": url ,
			success:function(data){
				$('#option-items').append(data);
			}
		});
		return;
	}
	function deleteoption(o) {
		$(o).parent().parent().remove();
	}
</script>