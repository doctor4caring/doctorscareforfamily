    var fm_currentDate = new Date();
    var FormCurrency_19 = '$';
    var FormPaypalTax_19 = '0';
    var check_submit19 = 0;
    var check_before_submit19 = {};
    var required_fields19 = ["23","30","28","24","29","68","70","72","74","76","10","15","44","34","11","12","13","46","48","49","51","53","55","56","58","60","64","66","67","39","77","79","40","41","80","81","82","83","84"];
    var labels_and_ids19 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","68":"type_radio","69":"type_text","70":"type_radio","71":"type_text","72":"type_radio","74":"type_text","75":"type_radio","76":"type_text","10":"type_radio","42":"type_own_select","43":"type_own_select","15":"type_radio","44":"type_own_select","45":"type_own_select","34":"type_own_select","11":"type_radio","12":"type_radio","13":"type_radio","38":"type_text","46":"type_radio","47":"type_text","48":"type_radio","49":"type_radio","50":"type_text","51":"type_radio","52":"type_text","53":"type_radio","55":"type_radio","56":"type_radio","57":"type_text","58":"type_radio","59":"type_text","60":"type_radio","61":"type_text","64":"type_radio","65":"type_text","66":"type_own_select","67":"type_radio","39":"type_text","77":"type_radio","78":"type_text","79":"type_text","40":"type_checkbox","41":"type_checkbox","80":"type_checkbox","81":"type_checkbox","82":"type_checkbox","83":"type_checkbox","84":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all19 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Incorrect Value"]};
    var check_paypal_price_min_max19 = [];
    var file_upload_check19 = [];
    var spinner_check19 = [];
    var scrollbox_trigger_point19 = '20';
    var header_image_animation19 = 'none';
    var scrollbox_loading_delay19 = '0';
    var scrollbox_auto_hide19 = '1';
    var inputIds19 = '[]';
        var update_first_field_id19 = 0;
    var form_view_count19 = 0;
    // Occurs before the form is loaded
function before_load19() {	
}	
// Occurs just before submitting  the form
function before_submit19() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset19() {	
}
// Occurs after form is submitted and reloaded
function after_submit19() {
  
}    function onload_js19() {    }

    function condition_js19() {    }

    function check_js19(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js19() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_68_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_68_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_70_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_72_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_72_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_75_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_75_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_51_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_53_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_55_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_56_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_58_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_60_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_64_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_67_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_67_allow_other_num19\" value=\"0\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_77_allow_other19\" value=\"no\" />").appendTo("#form19");
  jQuery("<input type=\"hidden\" name=\"wdform_77_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_80_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_80_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_81_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_81_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_82_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_82_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_83_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_83_allow_other_num19\" value=\"0\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_84_allow_other19\" value=\"no\" />").appendTo("#form19");
				  jQuery("<input type=\"hidden\" name=\"wdform_84_allow_other_num19\" value=\"0\" />").appendTo("#form19");
    var disabled_fields = "";
    jQuery("#form19 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields19\" value =\""+disabled_fields+"\" />").appendTo("#form19");
    };    }

    function unset_fields19( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields19(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity19( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 19,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form19 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form19 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form19 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready19() {
      if (jQuery('#form19 .wdform_section').length > 0) {
        fm_document_ready( 19 );
      }
      else {
        jQuery("#form19").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form19 .wdform_section').length > 0) {
        formOnload(19);
      }
      var ajaxObj19 = {};
      var value_ids19 = {};
      jQuery.each( jQuery.parseJSON( inputIds19 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form19 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form19 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form19 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form19 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids19[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids19[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form19 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids19[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj19.inputs = value_ids19;
          jQuery(document).on('change', '#form19 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids19[key + '|' + input_id] = id;
          jQuery.each( value_ids19, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids19).length;
              value_ids19 = unset_fields19( value_ids19, changing_field_id, count );
            }
          });
          ajaxObj19.inputs = value_ids19;
          ajax_similarity19( ajaxObj19, changing_field_id );
          });
        });
      });
      if ( update_first_field_id19 && !jQuery.isEmptyObject(ajaxObj19.inputs) ) {
        ajax_similarity19( ajaxObj19, update_first_field_id19 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready19();
    });
        