    var fm_currentDate = new Date();
    var FormCurrency_12 = '$';
    var FormPaypalTax_12 = '0';
    var check_submit12 = 0;
    var check_before_submit12 = {};
    var required_fields12 = ["23","35","24","33","34","10","15","16","17","18","11","12","13","19","21","22","32","31","36","38","39"];
    var labels_and_ids12 = {"23":"type_text","35":"type_date_new","24":"type_submitter_mail","33":"type_text","34":"type_text","10":"type_radio","25":"type_text","15":"type_radio","26":"type_text","16":"type_radio","27":"type_text","17":"type_radio","28":"type_text","18":"type_radio","29":"type_text","11":"type_radio","30":"type_text","12":"type_radio","13":"type_radio","19":"type_radio","21":"type_radio","22":"type_radio","32":"type_text","31":"type_radio","36":"type_text","38":"type_checkbox","39":"type_checkbox","1":"type_submit_reset"};
    var check_regExp_all12 = [];
    var check_paypal_price_min_max12 = [];
    var file_upload_check12 = [];
    var spinner_check12 = [];
    var scrollbox_trigger_point12 = '20';
    var header_image_animation12 = 'none';
    var scrollbox_loading_delay12 = '0';
    var scrollbox_auto_hide12 = '1';
    var inputIds12 = '[]';
        var update_first_field_id12 = 0;
    var form_view_count12 = 0;
    // Occurs before the form is loaded
function before_load12() {

}

// Occurs just before submitting  the form
function before_submit12() {
  // IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don't need to return any value if you don't want to stop the submission.
}

// Occurs just before resetting the form
function before_reset12() {

}
// Occurs after form is submitted and reloaded
function after_submit12() {

}    function onload_js12() {
  jQuery("#button_calendar_35, #fm-calendar-35").click(function() {
    jQuery("#wdform_35_element12").datepicker("show");
  }); 
  jQuery("#wdform_35_element12").datepicker({
    dateFormat: "mm/dd/yy",
    minDate: "",
    maxDate: "",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+50",
    showOtherMonths: true,
    selectOtherMonths: true,
    firstDay: "0",
    beforeShow: function(input, inst) {
      jQuery("#ui-datepicker-div").addClass("fm_datepicker");
    },
    beforeShowDay: function(date) {
      var invalid_dates = "";
      var invalid_dates_finish = [];
      var invalid_dates_start = invalid_dates.split(",");
      var invalid_date_range =[];
      for(var i = 0; i < invalid_dates_start.length; i++ ) {
        invalid_dates_start[i] = invalid_dates_start[i].trim();
        if(invalid_dates_start[i].length < 11 || invalid_dates_start[i].indexOf("-") == -1){
          invalid_dates_finish.push(invalid_dates_start[i]);
        }
        else{
          if(invalid_dates_start[i].indexOf("-") > 4) {
            invalid_date_range.push(invalid_dates_start[i].split("-"));
          }
          else {
            var invalid_date_array = invalid_dates_start[i].split("-");
            var start_invalid_day = invalid_date_array[0] + "-" + invalid_date_array[1] + "-" + invalid_date_array[2];
            var end_invalid_day = invalid_date_array[3] + "-" + invalid_date_array[4] + "-" + invalid_date_array[5];
            invalid_date_range.push([start_invalid_day, end_invalid_day]);
          }
        }
      }
      jQuery.each(invalid_date_range, function( index, value ) {
        for(var d = new Date(value[0]); d <= new Date(value[1]); d.setDate(d.getDate() + 1)) {
          invalid_dates_finish.push(jQuery.datepicker.formatDate("mm/dd/yy", d));
        }
      });
      var string_days = jQuery.datepicker.formatDate("mm/dd/yy", date);
      var day = date.getDay();
      return [ invalid_dates_finish.indexOf(string_days) == -1 ];
    }
  });
  var default_date;
  var date_value = jQuery("#wdform_35_element12").val();
  (date_value != "") ? default_date = date_value : default_date = "";
  jQuery("#wdform_35_element12").datepicker("option", "dateFormat", "mm/dd/yy");
  if(default_date == "today") {
    jQuery("#wdform_35_element12").datepicker("setDate", new Date());
  }
  else if (default_date.indexOf("d") == -1 && default_date.indexOf("m") == -1 && default_date.indexOf("y") == -1 && default_date.indexOf("w") == -1) {
    jQuery("#wdform_35_element12").datepicker("setDate", default_date);
  }
  else {
    jQuery("#wdform_35_element12").datepicker("setDate", default_date);
  }    }

    function condition_js12() {    }

    function check_js12(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js12() {
      
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_10_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_15_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_16_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_17_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_17_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_18_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_18_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_11_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_12_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_13_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_19_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_19_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_21_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_21_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_22_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_22_allow_other_num12\" value=\"0\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_31_allow_other12\" value=\"no\" />").appendTo("#form12");
  jQuery("<input type=\"hidden\" name=\"wdform_31_allow_other_num12\" value=\"0\" />").appendTo("#form12");
				  jQuery("<input type=\"hidden\" name=\"wdform_38_allow_other12\" value=\"no\" />").appendTo("#form12");
				  jQuery("<input type=\"hidden\" name=\"wdform_38_allow_other_num12\" value=\"0\" />").appendTo("#form12");
				  jQuery("<input type=\"hidden\" name=\"wdform_39_allow_other12\" value=\"no\" />").appendTo("#form12");
				  jQuery("<input type=\"hidden\" name=\"wdform_39_allow_other_num12\" value=\"0\" />").appendTo("#form12");
    var disabled_fields = "";
    jQuery("#form12 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
        disabled_fields += jQuery(this).attr("wdid");
        disabled_fields += ",";
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields12\" value =\""+disabled_fields+"\" />").appendTo("#form12");
    };    }

    function unset_fields12( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields12(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity12( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 12,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form12 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form12 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form12 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready12() {
      if (jQuery('#form12 .wdform_section').length > 0) {
        fm_document_ready( 12 );
      }
      else {
        jQuery("#form12").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form12 .wdform_section').length > 0) {
        formOnload(12);
      }
      var ajaxObj12 = {};
      var value_ids12 = {};
      jQuery.each( jQuery.parseJSON( inputIds12 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form12 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form12 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form12 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form12 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids12[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids12[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form12 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids12[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj12.inputs = value_ids12;
          jQuery(document).on('change', '#form12 [id^="wdform_'+ input_id +'_elemen"]', function() {
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
          value_ids12[key + '|' + input_id] = id;
          jQuery.each( value_ids12, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids12).length;
              value_ids12 = unset_fields12( value_ids12, changing_field_id, count );
            }
          });
          ajaxObj12.inputs = value_ids12;
          ajax_similarity12( ajaxObj12, changing_field_id );
          });
        });
      });
      if ( update_first_field_id12 && !jQuery.isEmptyObject(ajaxObj12.inputs) ) {
        ajax_similarity12( ajaxObj12, update_first_field_id12 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready12();
    });
        