## Yes, I know the repository is public.

| id | variables | 
|----|-----------|
|  ticket_open_thread_message  |  ticket_channel, thread, freelancer_id  |
|  offer_thread_accepted  |  ticket_channel, thread  |
|  offer_thread_closed  |  ticket_channel, thread  |
|  commission_type_selection  |  commission_type  |
|  ticket_monitoring_payment_reminder  |  ticket  |
|  ticket_monitoring_no_freelancer_chosen_reminder  |  ticket  |
|  ticket_monitoring_deadline_passed_in_progress  |  ticket  |
|  ticket_monitoring_deadline_passed_management  |  ticket  |
|  ticket_monitoring_in_progress_check_in  |  ticket  |
|  ticket_monitoring_review_reminder  |  ticket  |
|  ticket_closed  |  ticket  |
|  transcript_ticket_thread  |  transcript_url, thread  |
|  dm_transcript_ticket  |  transcript_url, ticket  |
|  transcript_ticket_channel_successful_dm  |  transcript_url, ticket  |
|  transcript_ticket_channel_no_member  |  transcript_url, ticket  |
|  command_not_in_text_channel  |  -  |
|  ticket_not_found  |  -  |
|  ticket_no_freelancer  |  -  |
|  generic_freelancer_permission_error  |  -  |
|  command_not_configured  |  command_name, command_id,   |
|  command_disabled  |  command_name, command_id,   |
|  command_not_enough_permissions  |  command_name, command_id,   |
|  command_incorrectly_configured  |  command_name, command_id,   |
|  bot_still_starting  |  -  |
|  ticket_delete_error  |  error  |
|  commission_offer_generic_error  |  -  |
|  commission_offer_accepted_waiting_for_payment  |  amount  |
|  commission_payment_link_creation_error  |  error  |
|  ticket_already_closed  |  -  |
|  ticket_close_error  |  error  |
|  ticket_closed_message  |  -  |
|  commission_offer_opening_not_allowed  |  -  |
|  commission_offer_opening_error  |  error  |
|  commission_offer_opening  |  thread  |
|  ticket_not_created_due_to_timeout  |  -  |
|  ticket_created_first_message  |  ticket, channel  |
|  ticket_created  |  ticket, channel  |
|  offer_not_created_due_to_timeout  |  -  |
|  invalid_payment_amount_not_a_number  |  -  |
|  invalid_payment_amount_too_low  |  -  |
|  invalid_payment_amount_too_high  |  -  |
|  commission_offer_message  |  freelancer_id  |
|  commission_offer_created  |  -  |
|  offer_thread_closed_message  |  -  |
|  features_disabled  |  features  |
|  customer_exclusive_command  |  -  |
|  failed_to_update_linked_roles  |  -  |
|  linked_roles_updated  |  -  |
|  create_commission_type_select_tags  |  -  |
|  thread_is_not_commission_opener_post  |  thread  |
|  generic_error_with_reason  |  reason  |
|  commission_type_post_regenerated  |  thread  |
|  ticket_not_of_commission_type  |  channel  |
|  ticket_cannot_modify_closed_ticket  |  channel  |
|  ticket_user_added  |  user, ticket, channel  |
|  ticket_cannot_remove_freelancer  |  channel  |
|  ticket_cannot_remove_customer  |  channel  |
|  ticket_user_removed  |  user, ticket, channel  |
|  ticket_cannot_escalate_management_ticket  |  channel  |
|  ticket_escalated  |  ticket, channel  |
|  ticket_cannot_modify_not_in_progress  |  channel  |
|  faq_response_id_invalid  |  id  |
|  faq_already_exists  |  faq  |
|  faq_added  |  faq_id, friendly_name  |
|  faq_deleted  |  faq_id, friendly_name  |
|  subuser_cannot_add_same_user  |  user  |
|  freelancer_not_found  |  user  |
|  freelancer_not_active  |  user, freelancer  |
|  user_already_subuser_for_other_freelancer  |  other_freelancer, subuser  |
|  cannot_add_main_freelancer_as_subuser  |  subuser, freelancer  |
|  subuser_added  |  subuser, freelancer  |
|  cannot_remove_main_freelancer  |  subuser, freelancer  |
|  subuser_removed  |  subuser, freelancer  |
|  freelancer_reonboarded  |  user  |
|  freelancer_already_onboarded  |  user  |
|  freelancer_id_already_used  |  freelancer_id  |
|  freelancer_display_name_already_used  |  display_name  |
|  freelancer_onboard_select_commission_type  |  -  |
|  freelancer_onboard_success  |  user  |
|  freelancer_offboarded  |  user, freelancer  |
|  freelancer_already_offboarded  |  user, freelancer  |
|  freelancer_modify_commission_type  |  -  |
|  freelancer_modify_commission_type_success  |  user, freelancer, old, new_types  |
|  invalid_freelancer_revenue_value  |  -  |
|  invoice_amount_too_low  |  -  |
|  invoice_amount_too_high  |  -  |
|  customer_not_found  |  -  |
|  malformed_payment_no_metadata  |  usd_value, session  |
|  malformed_payment_ticket_not_in_db  |  usd_value, session  |
|  malformed_payment_no_ticket_channel_found  |  ticket, usd_value, session  |
|  ticket_message_payment_success  |  ticket, usd_value, session  |
