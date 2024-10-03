    var fm_currentDate = new Date();
    var FormCurrency_42 = '$';
    var FormPaypalTax_42 = '0';
    var check_submit42 = 0;
    var check_before_submit42 = {};
    var required_fields42 = ["23","30","28","24","29","42","10","43","44","15","16","39","50","40","41","45","46","47","48","49"];
    var labels_and_ids42 = {"23":"type_text","30":"type_date_fields","28":"type_text","24":"type_submitter_mail","29":"type_text","42":"type_own_select","10":"type_radio","43":"type_own_select","44":"type_own_select","15":"type_radio","33":"type_text","16":"type_radio","35":"type_text","39":"type_text","50":"type_radio","51":"type_text","52":"type_text","40":"type_checkbox","41":"type_checkbox","45":"type_checkbox","46":"type_checkbox","47":"type_checkbox","48":"type_checkbox","49":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all42 = {"23":["%5E%5Ba-zA-Z%27-%27%5Cs%5D+%24","","Incorrect Value"],"28":["%5E%28%5C+%29%3F%5B0-9%5D+%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%28-%5B0-9%5D+%29%3F%24","","Enter valid Phone number"]};
    var check_paypal_price_min_max42 = [];
    var file_upload_check42 = [];
    var spinner_check42 = [];
    var scrollbox_trigger_point42 = '20';
    var header_image_animation42 = 'none';
    var scrollbox_loading_delay42 = '0';
    var scrollbox_auto_hide42 = '1';
    var inputIds42 = '[]';
        var update_first_field_id42 = 0;
    var form_view_count42 = 0;
    // Occurs before the form is loaded
function before_load42() {	
}	
// Occurs just before submitting  the form
function before_submit42() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset42() {	
}
// Occurs after form is submitted and reloaded
function after_submit42() {
  
}    function onload_js42() {    }

    function condition_js42() {    }

    function check_js42(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js42() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other42\" value=\"no\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num42\" value=\"0\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other42\" value=\"no\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num42\" value=\"0\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other42\" value=\"no\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num42\" value=\"0\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other42\" value=\"no\" />").appendTo("#form42");
  jQuery("<input type=\"hidden\" name=\"wdform_50_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_40_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_41_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_45_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_46_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_47_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_48_allow_other_num42\" value=\"0\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other42\" value=\"no\" />").appendTo("#form42");
				  jQuery("<input type=\"hidden\" name=\"wdform_49_allow_other_num42\" value=\"0\" />").appendTo("#form42");
    var disabled_fields = "";
    jQuery("#form42 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields42\" value =\""+disabled_fields+"\" />").appendTo("#form42");
    };    }

    function unset_fields42( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields42(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity42( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 42,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form42 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form42 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form42 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready42() {
      if (jQuery('#form42 .wdform_section').length > 0) {
        fm_document_ready( 42 );
      }
      else {
        jQuery("#form42").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form42 .wdform_section').length > 0) {
        formOnload(42);
      }
      var ajaxObj42 = {};
      var value_ids42 = {};
      jQuery.each( jQuery.parseJSON( inputIds42 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form42 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form42 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form42 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form42 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids42[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids42[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form42 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids42[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj42.inputs = value_ids42;
          jQuery(document).on('change', '#form42 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids42[key + '|' + input_id] = id;
          jQuery.each( value_ids42, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids42).length;
              value_ids42 = unset_fields42( value_ids42, changing_field_id, count );
            }
          });
          ajaxObj42.inputs = value_ids42;
          ajax_similarity42( ajaxObj42, changing_field_id );
          });
        });
      });
      if ( update_first_field_id42 && !jQuery.isEmptyObject(ajaxObj42.inputs) ) {
        ajax_similarity42( ajaxObj42, update_first_field_id42 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready42();
    });
        