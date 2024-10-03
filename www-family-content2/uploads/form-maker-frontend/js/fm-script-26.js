    var fm_currentDate = new Date();
    var FormCurrency_26 = '$';
    var FormPaypalTax_26 = '0';
    var check_submit26 = 0;
    var check_before_submit26 = {};
    var required_fields26 = ["23","30","28","24","29","46","48","50","52","10","54","15","16","43","44","35","45","39","55","40","41","58","59","60","61","62"];
    var labels_and_ids26 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","46":"type_radio","47":"type_text","48":"type_radio","49":"type_text","50":"type_radio","52":"type_text","10":"type_radio","53":"type_radio","54":"type_text","15":"type_radio","16":"type_radio","43":"type_radio","44":"type_radio","35":"type_text","45":"type_text","39":"type_text","55":"type_radio","56":"type_text","57":"type_text","40":"type_checkbox","41":"type_checkbox","58":"type_checkbox","59":"type_checkbox","60":"type_checkbox","61":"type_checkbox","62":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all26 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max26 = [];
    var file_upload_check26 = [];
    var spinner_check26 = [];
    var scrollbox_trigger_point26 = '20';
    var header_image_animation26 = 'none';
    var scrollbox_loading_delay26 = '0';
    var scrollbox_auto_hide26 = '1';
    var inputIds26 = '[]';
        var update_first_field_id26 = 0;
    var form_view_count26 = 0;
    // Occurs before the form is loaded
function before_load26() {	
}	
// Occurs just before submitting  the form
function before_submit26() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset26() {	
}
// Occurs after form is submitted and reloaded
function after_submit26() {
  
}    function onload_js26() {    }

    function condition_js26() {    }

    function check_js26(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js26() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_43_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_44_allow_other_num26\" value=\"0\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other26\" value=\"no\" />").appendTo("#form26");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num26\" value=\"0\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other26\" value=\"no\" />").appendTo("#form26");
				  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num26\" value=\"0\" />").appendTo("#form26");
    var disabled_fields = "";
    jQuery("#form26 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields26\" value =\""+disabled_fields+"\" />").appendTo("#form26");
    };    }

    function unset_fields26( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields26(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity26( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 26,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form26 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form26 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form26 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready26() {
      if (jQuery('#form26 .wdform_section').length > 0) {
        fm_document_ready( 26 );
      }
      else {
        jQuery("#form26").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form26 .wdform_section').length > 0) {
        formOnload(26);
      }
      var ajaxObj26 = {};
      var value_ids26 = {};
      jQuery.each( jQuery.parseJSON( inputIds26 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form26 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form26 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form26 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form26 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids26[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids26[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form26 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids26[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj26.inputs = value_ids26;
          jQuery(document).on('change', '#form26 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids26[key + '|' + input_id] = id;
          jQuery.each( value_ids26, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids26).length;
              value_ids26 = unset_fields26( value_ids26, changing_field_id, count );
            }
          });
          ajaxObj26.inputs = value_ids26;
          ajax_similarity26( ajaxObj26, changing_field_id );
          });
        });
      });
      if ( update_first_field_id26 && !jQuery.isEmptyObject(ajaxObj26.inputs) ) {
        ajax_similarity26( ajaxObj26, update_first_field_id26 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready26();
    });
        