    var fm_currentDate = new Date();
    var FormCurrency_41 = '$';
    var FormPaypalTax_41 = '0';
    var check_submit41 = 0;
    var check_before_submit41 = {};
    var required_fields41 = ["23","30","28","24","29","10","47","49","45","54","42","43","15","16","11","13","65","39","55","40","41","60","61","62","63","64"];
    var labels_and_ids41 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","10":"type_radio","46":"type_text","47":"type_radio","48":"type_text","49":"type_radio","51":"type_text","45":"type_radio","53":"type_radio","54":"type_text","42":"type_own_select","32":"type_text","43":"type_own_select","15":"type_radio","33":"type_text","16":"type_radio","44":"type_text","11":"type_radio","36":"type_text","13":"type_radio","38":"type_text","65":"type_text","39":"type_text","55":"type_radio","58":"type_text","40":"type_checkbox","41":"type_checkbox","60":"type_checkbox","61":"type_checkbox","62":"type_checkbox","63":"type_checkbox","64":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all41 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max41 = [];
    var file_upload_check41 = [];
    var spinner_check41 = [];
    var scrollbox_trigger_point41 = '20';
    var header_image_animation41 = 'none';
    var scrollbox_loading_delay41 = '0';
    var scrollbox_auto_hide41 = '1';
    var inputIds41 = '[]';
        var update_first_field_id41 = 0;
    var form_view_count41 = 0;
    // Occurs before the form is loaded
function before_load41() {	
}	
// Occurs just before submitting  the form
function before_submit41() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset41() {	
}
// Occurs after form is submitted and reloaded
function after_submit41() {
  
}    function onload_js41() {    }

    function condition_js41() {    }

    function check_js41(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js41() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num41\" value=\"0\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other41\" value=\"no\" />").appendTo("#form41");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_63_allow_other_num41\" value=\"0\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other41\" value=\"no\" />").appendTo("#form41");
				  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other_num41\" value=\"0\" />").appendTo("#form41");
    var disabled_fields = "";
    jQuery("#form41 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields41\" value =\""+disabled_fields+"\" />").appendTo("#form41");
    };    }

    function unset_fields41( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields41(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity41( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 41,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form41 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form41 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form41 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready41() {
      if (jQuery('#form41 .wdform_section').length > 0) {
        fm_document_ready( 41 );
      }
      else {
        jQuery("#form41").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form41 .wdform_section').length > 0) {
        formOnload(41);
      }
      var ajaxObj41 = {};
      var value_ids41 = {};
      jQuery.each( jQuery.parseJSON( inputIds41 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form41 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form41 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form41 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form41 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids41[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids41[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form41 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids41[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj41.inputs = value_ids41;
          jQuery(document).on('change', '#form41 [id^="wdform_'+ input_id +'_elemen"]', function() {
          var id = '';
          var changing_field_id = '';
          if( jQuery(this).attr("tagName") == 'INPUT' ) {
            if( jQuery(this).is(':checked') ) {
              id = jQuery(this).val();
            }
            if( jQuery(this).attr('type') == 'text' ) {
              id = jQuery(this).val();
            }
          }
          else {
            id = jQuery(this).val();
          }
          value_ids41[key + '|' + input_id] = id;
          jQuery.each( value_ids41, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids41).length;
              value_ids41 = unset_fields41( value_ids41, changing_field_id, count );
            }
          });
          ajaxObj41.inputs = value_ids41;
          ajax_similarity41( ajaxObj41, changing_field_id );
          });
        });
      });
      if ( update_first_field_id41 && !jQuery.isEmptyObject(ajaxObj41.inputs) ) {
        ajax_similarity41( ajaxObj41, update_first_field_id41 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready41();
    });
        