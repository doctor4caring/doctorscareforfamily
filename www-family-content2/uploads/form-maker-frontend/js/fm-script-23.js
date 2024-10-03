    var fm_currentDate = new Date();
    var FormCurrency_23 = '$';
    var FormPaypalTax_23 = '0';
    var check_submit23 = 0;
    var check_before_submit23 = {};
    var required_fields23 = ["23","30","28","24","29","62","64","66","68","70","42","10","11","12","13","54","59","61","39","71","74","40","41","75","76","77","78","79"];
    var labels_and_ids23 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","62":"type_radio","63":"type_text","64":"type_radio","65":"type_text","66":"type_radio","68":"type_text","69":"type_radio","70":"type_text","42":"type_own_select","72":"type_text","43":"type_own_select","44":"type_text","45":"type_own_select","46":"type_text","10":"type_radio","31":"type_text","47":"type_own_select","48":"type_text","11":"type_radio","12":"type_radio","13":"type_radio","50":"type_own_select","51":"type_text","52":"type_own_select","53":"type_text","54":"type_radio","55":"type_text","56":"type_own_select","59":"type_radio","60":"type_text","61":"type_radio","39":"type_text","71":"type_radio","73":"type_text","74":"type_text","40":"type_checkbox","41":"type_checkbox","75":"type_checkbox","76":"type_checkbox","77":"type_checkbox","78":"type_checkbox","79":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all23 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max23 = [];
    var file_upload_check23 = [];
    var spinner_check23 = [];
    var scrollbox_trigger_point23 = '20';
    var header_image_animation23 = 'none';
    var scrollbox_loading_delay23 = '0';
    var scrollbox_auto_hide23 = '1';
    var inputIds23 = '[]';
        var update_first_field_id23 = 0;
    var form_view_count23 = 0;
    // Occurs before the form is loaded
function before_load23() {	
}	
// Occurs just before submitting  the form
function before_submit23() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset23() {	
}
// Occurs after form is submitted and reloaded
function after_submit23() {
  
}    function onload_js23() {    }

    function condition_js23() {    }

    function check_js23(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js23() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_62_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_66_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_66_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_69_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_69_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_54_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_54_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_59_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_61_allow_other_num23\" value=\"0\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_71_allow_other23\" value=\"no\" />").appendTo("#form23");
  jQuery("<input type=\"hidden\" name=\"wdform_71_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_75_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_75_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_76_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_76_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_77_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_77_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_78_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_78_allow_other_num23\" value=\"0\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_79_allow_other23\" value=\"no\" />").appendTo("#form23");
				  jQuery("<input type=\"hidden\" name=\"wdform_79_allow_other_num23\" value=\"0\" />").appendTo("#form23");
    var disabled_fields = "";
    jQuery("#form23 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields23\" value =\""+disabled_fields+"\" />").appendTo("#form23");
    };    }

    function unset_fields23( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields23(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity23( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 23,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form23 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form23 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form23 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready23() {
      if (jQuery('#form23 .wdform_section').length > 0) {
        fm_document_ready( 23 );
      }
      else {
        jQuery("#form23").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form23 .wdform_section').length > 0) {
        formOnload(23);
      }
      var ajaxObj23 = {};
      var value_ids23 = {};
      jQuery.each( jQuery.parseJSON( inputIds23 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form23 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form23 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form23 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form23 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids23[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids23[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form23 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids23[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj23.inputs = value_ids23;
          jQuery(document).on('change', '#form23 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids23[key + '|' + input_id] = id;
          jQuery.each( value_ids23, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids23).length;
              value_ids23 = unset_fields23( value_ids23, changing_field_id, count );
            }
          });
          ajaxObj23.inputs = value_ids23;
          ajax_similarity23( ajaxObj23, changing_field_id );
          });
        });
      });
      if ( update_first_field_id23 && !jQuery.isEmptyObject(ajaxObj23.inputs) ) {
        ajax_similarity23( ajaxObj23, update_first_field_id23 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready23();
    });
        