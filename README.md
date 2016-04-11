		<p>&nbsp;</p>
		<h1>FormView Control</h1>
		<p>The FormView control is used to create a special type of 'form' on a 
		UX component. Touch-optimized, mobile forms are built using the FormView 
		control, but there are other use cases for this control as well.</p>
		<p>&nbsp;</p>
		<p><a href="http://youtu.be/QUpW5LXaoVU">Watch video of a sample 
		application that shows a tablet optimized form</a></p>
		<p>
		<a href="http://downloads.alphasoftware.com/a5v12Download/Private/TabletFormsBeta/TabletForm_Sample_App_V1.zip">
		Download component used in video</a></p>
		<p>&nbsp;</p>
		<p><a href="http://www.viddler.com/v/c0810403">Watch video of a sample 
		application that shows a phone optimized form</a></p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>The FormView control is an extremely versatile and powerful control 
		that allows complex, and highly stylized user interfaces to be build. 
		But the basic concepts of the FormView control are actually quite simple 
		and this document will explain these concepts.</p>
		<p>The key concept of the FormView control (explained in more detail 
		below) is that the display of the data in the form (accomplished by 
		merging the form data into an HTML template), and the editing of the 
		data in each form fields are done using different controls (accomplished 
		using 'Field Editor' controls).</p>
		<p>The images below show examples of UX components built using the 
		FormView control:</p>
		<p>&nbsp;</p>
		<p><b>Tablet optimized form examples</b></p>
		<p>The next 3 images show a form that has been optimized for a tablet 
		display. The 'form' part displays the values of the the form fields 
		(Inspection Date, Inspector Name, Owner, Owner Phone#, Make, Model, 
		etc.). A section at the top of the form is where the 'editors' are 
		shown. In image 1, the Inspection Date field on the form has focus and 
		the editor for this value is open.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="autoconditionform_0.jpg"></p>
		<p><i>Tablet Form - Image 1</i></p>
		<p>&nbsp;</p>
		<p>In image 2, the Inspector Name field on the form has focus and the 
		editor for this field is show (highlighted in yellow) in the editing 
		section at the top of the screen.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="autoconditionform_3.jpg"></p>
		<p><i>Tablet Form - Image 2</i></p>
		<p>&nbsp;</p>
		<p>In image 3, the Owner Phone# field has focus and the editor for this 
		value is shown. Note that the editor for the phone number field uses a 
		custom keyboard -- not the built in native keyboard. The custom keyboard 
		is shown at the top of the screen and it overlays the screen rather than 
		pushing the screen up (as the native keyboard would do).</p>
		<p>&nbsp;</p>
		<p><img border="0" src="autoconditionform_1.jpg"></p>
		<p><i>Tablet Form - Image 3</i></p>
		<p>&nbsp;</p>
		<p><b>Phone optimized form examples</b></p>
		<p>The next 4 images show a form that has been optimized for a phone 
		display. In the first image the user selects the 'form page' that they 
		want to edit. Because the form has a large number fields, the form is 
		broken into logical 'pages' which the user can select from the 'Pages' 
		list.</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p><img border="0" src="phoneform1.jpg"></p>
		<p><i>Phone Form - Image 1</i></p>
		<p>&nbsp;</p>
		<p>In image 2, the 'Checklist' page of the form is shown. This pages has 
		a series of pass/fail questions. Questions that have been answered as 
		'passed' are shown in green and questions that have been answered as 
		'failed' are shown in red.</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p><img border="0" src="phoneform2.jpg"></p>
		<p><i>Phone Form - Image 2</i></p>
		<p>&nbsp;</p>
		<p>In image number 3, the user has tapped on a question and the 'editor' 
		for that question is shown. The editor allows the user to set the 
		question answer to pass or fail.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="phoneform3.jpg"></p>
		<p><i>Phone Form - Image 3</i></p>
		<p>&nbsp;</p>
		<p>In mage 4 shown below a specialized 'editor' is shown. This is an 
		example of how editors can be constructed to make answering particular 
		types of questions easy. For example, this editor is designed to allow 
		the operation to measure the rotational speed of a drum.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="phoneform4.jpg"></p>
		<p><i>Phone Form - Image 4</i></p>
		<p>&nbsp;</p>
		<h2>Basic Concepts</h2>
		<p><i>Data Source</i></p>
		<p>The FormView control has a <font color="#0000FF" face="Courier New">
		data source</font>. The <font color="#0000FF" face="Courier New">data 
		source</font> contains the data that the FormView control will display 
		and edit (if the FormView is editable - it does not have to be). The
		<font color="#0000FF" face="Courier New">data source</font> can be a 
		List Control, an arbitrary Javascript object, or some other controls on 
		the UX.</p>
		<p>The most common data source for FormView controls, however, is the 
		List Control. When you specify that the List control is the data source 
		for the FormView, you get a lot of very helpful built-in behavior. For 
		example, clicking on a row in the List will populate the FormView with 
		data from that row (much like the behavior you get in a List with a 
		Detail View). </p>
		<p class="note"><b>NOTE</b>: A common design pattern is to define a List 
		control and turn on its Detail View property, but to actually use a 
		FormView control to define the List's Detail View (rather than adding 
		individual controls, such as text box controls, for the List's Detail 
		View).</p>
		<p>&nbsp;</p>
		<p><i>HTML Template</i></p>
		<p>The actual layout of the FormView control is defined by an HTML 
		template. This means that you can use the full expressive power of HTML 
		and CSS to create beautiful forms.</p>
		<p class="note"><b>NOTE</b>: The HTML shown in the FormView control is 
		obtained by merging data from the FormView control's data source into a 
		template. The template a standard template used by Alpha Anywhere's 
		client-side templating feature. For more information on client-side 
		templates, search Release Notes for 'Client-side Templates'.</p>
		<p>Because the HTML that is displayed in the FormView is generated using 
		client-side templating, it is easy to add features to the form such as 
		conditional sections, etc.</p>
		<p><i>Editor Sets and Editors</i></p>
		<p>The data shown in the FormView control is generally not directly 
		editable. Instead, when the user taps on a field value shown in the 
		FormView, an <font color="#0000FF" face="Courier New">editor</font> is 
		opened to edit the value. The editor is contained in an
		<font color="#0000FF" face="Courier New">editor set</font>.&nbsp; After 
		the user edits the field value in the
		<font color="#0000FF" face="Courier New">editor</font>, and saves the 
		edit, the FormView control is updated with the edited value.</p>
		<p>Editors are a shared resource. Many fields on a FormView control can 
		share the same <font color="#0000FF" face="Courier New">editor</font>. 
		However, even though many fields on a form can share the same editor, 
		each time an editor is invoked to edit the value in a field, that field 
		can pass a custom <font color="#0000FF" face="Courier New">settings</font> 
		object to the editor to customize aspects of the editor's behavior. </p>
		<p>By using shared editors, very large forms can be built, while still 
		keeping the UX component itself relatively small and efficient.</p>
		<p>Certain types of field values can be edited directly on the Form 
		(without having to go to a separate
		<font color="#0000FF" face="Courier New">editor</font>). For example, a 
		'switch' control, which shows an On/Off value could be toggled directly 
		on the FormView control. The switch control shown on the Form is called 
		an <font color="#0000FF" face="Courier New">immediate editor</font>.</p>
		<p>Editors are built using standard UX component controls. So, for 
		example, some editors might allow the user to type a value into a text 
		box control, while other editors will provide a list of choices (shown 
		in a List control).</p>
		<p>An <font color="#0000FF" face="Courier New">editor set</font> can 
		contain several different <font color="#0000FF" face="Courier New">
		editors</font>. For example, in a touch optimized mobile form running on 
		a phone, the editor set might be in its own Panel Card. When the user 
		taps on a field on the Form, the Panel Card containing the selected 
		editor would be animated into view. Once the user has made the edit and 
		committed the new value, the Panel Card containing the editor set would 
		be animated out of view.</p>
		<p>Editor sets and Editors are added to the UX by adding a [Container] 
		control (from the Containers section in the UX toolbox) and then 
		selecting the appropriate container sub-type.</p>
		<p>Alpha Anywhere comes with a number of pre-defined editors. These are 
		shown in the Other Controls section of the UX Component toolbox.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="predefinededitors.jpg"></p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<h2>Adding a FormView control to a UX Component</h2>
		<p>To add a FormView control to a UX component, select the [FormView] 
		item from the toolbox in the Other Controls section.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="fv_toolbox.jpg"></p>
		<p>&nbsp;</p>
		<p>Once you have added a FormView control to the UX, the property sheet 
		for the control will have a Form properties item that you can click to 
		open the FormView builder.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="fv_propsheet.gif"></p>
		<p>&nbsp;</p>
		<p>The FormView editor is shown in the image below.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="formvieweditor.jpg"></p>
		<p>&nbsp;</p>
		<p>To get an understanding of the various panes in the FormView editor, 
		please watch the Introductory Videos, listed below.</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<h2>Introductory Videos</h2>
		<p>&nbsp;</p>
						<table border="1" cellspacing="1" cellpadding="3" id="table67" style="color: rgb(0, 0, 0); font-family: 'Times New Roman'; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; margin-left: 0.5in; border-collapse: collapse; " width="992">

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Introduction - Getting Started</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Create an extremely basic (readonly) FormView to 
								display data in a List control.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_intro1.swf">
								Watch Video</a><br>
								<br>
								Date added: 2015-08-03</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Introduction - Simple Updateable Form</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								In this video we make an updateable FormView.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_intro2.swf">
								Watch Video</a><br>
								<br>
								Date added: 2015-08-03</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Understanding how Editor Sets and Editors Work 
								to Make a FormView Editable</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								A key feature of the FormView is that many 
								controls on the Form share the same editor. This 
								is important because it allows you to have forms 
								with a large number of fields, but still keep 
								the UX very light weight.<br>
								<br>
								In this video we discuss how Editor Sets and 
								Editors work and we discuss in some depth the 
								various Editor and Editor Set events.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_intro3.swf">
								Watch Video - Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_intro4.swf">
								Watch Video - Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_intro5.swf">
								Watch Video - Part 3</a><br>
								<br>
								Date added: 2015-08-03<br>
								<br>
								Addendum: In video 3, the Javascript shown to 
								get the title is <font face="Courier New">'<font color="#0000FF">title = settings['*a5column']</font></font>. 
								This technique is now deprecated and the correct 
								method is '<font face="Courier New">title = settings.formView.active.name</font>'.</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Understanding Field Templates</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								When the FormView is rendered, the HTML for each 
								field on the form is generated from a Template. 
								The template can be defined at the Form level 
								(so that each field on the Form uses the same 
								template), or it can be defined for individual 
								fields (so that each field on the Form can have 
								its own template).<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_templates.swf">Watch Video</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_templates.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-08-10</td>
							</tr>
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Using Conditional Statements in Templates</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								The templates that you define for each field in 
								a FormView are the same as the templates you 
								would define when using Alpha Anywhere's 
								Client-side Templating feature. This means you 
								can use all of the powerful directives that are 
								supported in client-side templating, such as 
								conditional statements.<br>
								<br>
								In this video we show have the template for a 
								field can be dynamically modified based on data 
								in the field.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_conditional_templates.swf">Watch Video</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_ConditionalTemplates.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-08-10</td>
							</tr>
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Named Templates</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Templates that define how the HTML for a field 
								in a Form can be defined at the individual field 
								level, or if not defined at the field level, a 
								system template can be used. However, you can 
								also create an unlimited number of 'named' 
								templates that can be used when you define a 
								template at the field level. <br>
								<br>
								In this video we show how named templates can be 
								used.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_named_templates.swf">Watch Video</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_NamedTemplates.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-08-10</td>
							</tr>
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Using Containers to Display Conditional Parts of 
								a Form</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								All of the controls that you place on a FormView 
								control can have an associated show/hide 
								expression. <br>
								<br>
								In this video we show how a block of text in the 
								FormView control can be conditionally shown or 
								hidden.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_conditional_container.swf">Watch Video</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_ConditionalContainer.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-08-10</td>
							</tr>
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Switch Control</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Most fields in a FormView control are edited in 
								an associated 'editor'. When the user taps on 
								the field in the Form, the associated editor is 
								opened, the user edits the form field value and 
								then saves the edited value back to the form. 
								This is called 'indirect editing'.<br>
								<br>
								There are cases, however, where 'immediate' 
								editing of a value would be more convenient than 
								having to go to a separate editor to edit the 
								value. A good use case for an 'immediate' editor 
								is a toggle field that has two states, such as 
								'Yes' or 'No' for a 'Married' field. A 'switch' 
								control is ideal for this use case.<br>
								<br>
								In this video we show how you can add a switch 
								control to a FormView. The switch control acts 
								as an 'immediate' editor.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_immediate_editors_switch.swf">Watch Video</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormViewSwitch.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-08-10</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Creating an Editor using a Dropdown Box Control</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								The editors that you define for the fields in a 
								FormView control can be constructed using any 
								of the available UX component controls. For 
								example, you might want to define an editor that 
								uses a standard Dropdownbox control. However, 
								since editors can be shared, you do not want to 
								hard code the list of choices for the 
								Dropdownbox into the Dropdownbox definition. 
								Instead, you will want to dynamically populate 
								the choices in the Dropdownbox at the time the 
								editor is opened.<br>
								<br>
								In this video we show how the editor for a State 
								field is defined using a Dropdownbox control and 
								how the choices for this Dropdownbox control are 
								defined in the 'user defined settings' for the 
								field in the FormView builder.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_dropdownbox_editor_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_dropdownbox_editor_2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_dropdowneditor.zip">
								Download Component</a><br>
								<br>
								Addendum. In this video we show how the 
								Dropdownbox control choices can be populated 
								with a display value and a stored value for each 
								choice in the Dropdownbox.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_dropdownbox_editor_3.swf">Watch Video 
								- Part 3</a><br>
								<br>
								Addendum 2: In the above videos the code to 
								populate the Dropdownbox control is placed in 
								the 'Show editor' event handler. It is 
								recommended, however, that this code be placed 
								in the 'Set value in editor' event handler.<br>
								<br>
								Date added: 2015-08-10</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Cascading Dropdownbox Editors</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								A 'cascading' Dropdownbox is a Dropdownbox where 
								the choices are based on the selection in the 
								Dropdownbox control's 'parent' controls. For 
								example, the choices in a 'City' Dropdown box 
								might only show cities that are in the selected 
								State.<br>
								<br>
								In this video we show how a cascading 
								Dropdownbox editor can be configured to edit the 
								City field in a FormView control.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_dropdownbox_cascading_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_dropdownbox_cascading_2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_CascadingDropdown.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-08-10</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Cascading List Control Editors</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								A 'cascading' List control is a List control 
								where the choices are based on the selection in 
								the List control's 'parent' controls. For 
								example, the choices in a 'City' List control 
								might only show cities that are in the selected 
								State.<br>
								<br>
								In this video we show how a List control can be 
								used to edit the value in a State and City field 
								on a form. The choices shown in the City List 
								control are dynamically set based on the data in 
								the State List control. <br>
								<br>
								NOTE: These videos assume you have previously 
								watched the 'Cascading Dropdownbox Editors' 
								videos as many of the concepts shown in this 
								video are the same as<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_listcontrol_cascading_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_listcontrol_cascading_2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_listcontrol_cascading_3.swf">Watch Video 
								- Part 3</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_CascadingLists.zip">Download Component</a><br>
								<br>
								NOTE: The technique shown in this video involves 
								writing code. However the same thing can be 
								accomplished without any code by using the 
								pre-defined List Control editor, as shown in the 
								video 'Introducing the built-in List Control 
								Editor'.<br>
								<br>
								<br>
								Date added: 2015-08-10</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Displaying a New Record in the FormView Control</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								When you are working with a FormView control, 
								the Form typically displays data from a row in 
								the FormView's data source. But you also need to 
								be able to add new rows of data to the FormView 
								control's data source. <br>
								<br>
								In this video we show how you point the FormView control to a 'new record' which can then be 
								added to the data source when the FormView is 
								committed.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_displayNewRecord.swf">Watch Video</a><br>
								<br>
								Date added: 2015-08-12</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Saving FormView Control Data to a SQL Database</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								If the data source for a FormView control is a 
								List control, you can easily persist the 
								FormView control data to a SQL database.<br>
								<br>
								The technique is to set the List control (which 
								is the FormView control's data source) to have 
								a Detail View, but to not actually define a 
								Detail View for the List, since the FormView 
								control will be 'acting' as the List's Detail 
								View. However, by specifying that the List has a 
								Detail View, you enable all of the List/Detail 
								View methods for persisting List data to a SQL 
								database and you get the ability for the List to 
								work in a disconnected mode.<br>
								<br>
								In this video we show how a simple FormView 
								control which uses a List that is based on a 
								static data source can be converted to use a SQL 
								database as its back end.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_persistToSQL_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_persistToSQL_2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_SQLDataSource.zip">Download Component</a><br>
								<br>
								Date added: 2015-08-12</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Displaying and Capturing Images using the Camera</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								A common use case with a FormView is to capture 
								pictures (using the Camera on a mobile device, 
								or selecting the picture from the Photo Library 
								on a device). If the device does not have a 
								camera, the HTML5 image capture option will 
								allow you to select the image from the file 
								system.<br>
								<br>
								When you capture images, you can either capture 
								the base64 encoded image data, or (if you are 
								running in a PhoneGap application), you can 
								capture the filename of the image. For 
								disconnected application that use PhoneGap, it 
								is preferable to use the option to capture the 
								image filename since that will allow you to 
								capture many more images while you are 
								disconnected than would be possible if you were 
								using the base64 encoded option.<br>
								<br>
								In this video we show how a FormView is 
								configured to capture images.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_imagecapture.swf">Watch Video</a><br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_imageCapture.zip">Download Component</a><br>
								<br>
								Date added: 2016-03-06</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - Ink Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Introduction to the Ink Control</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								The Ink control allows you to create and edit 
								'ink' data. <br>
								<br>
								In this video we give a very brief introduction 
								to the Ink control.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_ink_intro_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_ink_intro_2.swf">Watch Video 
								- Part 2</a><br>
								<br>
								Date added: 2015-08-13</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Displaying and Capturing Ink using the Alpha 
								Anywhere Ink Control</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								The Ink control allows a user to draw on the 
								screen (using a finger or special pen on a 
								mobile device, or a mouse on a desktop 
								computer). The drawing is referred to as 'Ink' 
								and it can be displayed on a Form and edited 
								using the Ink control.<br>
								<br>
								TIP: Before watching this video you should watch 
								'Introduction to the Ink Control'.<br>
								<br>
								In this video we show how an 'InkNotes' field 
								can be added to the List control that is acting 
								as a FormView control's data source, how the 
								'ink' can be displayed in the FormView control 
								and how the ink can be edited in an 'editor' 
								that is configured to use the Alpha Anywhere Ink 
								control.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_ink1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_ink2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_ink3.swf">Watch Video 
								- Part 3</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_ink.zip">Download Component</a><br>
								<br>
								Date added: 2015-08-13</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Annotating Images using the Ink Control</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								A common use case with the FormView control is 
								to capture images and then annotate the image by 
								drawing on top of the image using the Ink 
								control. <br>
								<br>
								In this video we show how the FormView control 
								can be configured to use an Ink Control editor 
								to allow annotation of images.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_image_annotation.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_image_annotation2.swf">Watch Video 
								- Part 2</a><br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_imageCaptureAnnotation.zip">Download Component</a><br>
								<br>
								<br>
								Date added: 2016-03-06</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Introduction to Group Editors</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								The common pattern when using a FormView 
								control is to edit a single value in a FormView 
								with its associated editor at a time. For 
								example, when the user clicks on 'field1' in the 
								FormView, the associated editor for 'field1' is 
								shown and the user can edit the value in 
								'field1'. <br>
								<br>
								In some cases, however, you might want to edit 
								the value of multiple fields simultaneously. For 
								example, if the user fields on ANY of 'field1', 
								'field2', or 'field3', for example, you might 
								want to open an editor that allows you to edit 
								all of the these fields at once.<br>
								<br>
								This is easily accomplished using the concept of 
								'Group Editors'.<br>
								<br>
								In this video we show how the Address, City, 
								State and Country field in a form are edited 
								using a Group Editor for this group of fields.<br>
								<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_groups_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_groups_2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_groups_3.swf">Watch Video 
								- Part 3</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/FormView_GroupEditors.zip">Download Component</a><br>
								<br>
								Date added: 2015-08-13</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								List Control Editor - Dynamically Populate with 
								SQL Data</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								In a previous video we showed how a List control 
								could be used as an editor for a field on a 
								FormView control and how the data in the List 
								could be populated when the editor is shown. In 
								that video, the data used to populate the List 
								was static data.<br>
								<br>
								In many cases, however, the data that you use to 
								populate the List will come from a database 
								query. In this video we show how you can use a 
								SQL query to get the list of countries with 
								which to populate the List used in the editor 
								for the 'country' field on a FormView control.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_listeditor_sqldata_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_listeditor_sqldata_2.swf">Watch Video 
								- Part 2</a><br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/formview_sqldata.zip">Download Component</a><br>
								<br>
								ERRATA: The video shows the code for the 'Set 
								value in editor' event incorrectly. It should 
								have been: <br>
								{dialog.object}.setValue(<font color="#0000FF">'EDITOR_3_LIST</font>',value);<br>
								<br>
								NOTE: The technique shown in this video involves 
								writing code. However the same thing can be 
								accomplished without any code by using the 
								'client-side data case then the pre-defined List 
								Control editor, as shown in the video 
								'Introducing the built-in List Control Editor'.<br>
								<br>
								Date added: 2015-08-14</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Introducing the built-in List Control Editor</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								When editing a value in a form it is common to 
								allow the user to pick the value for the field 
								from a list. In previous videos we showed how 
								you could manually configure an Editor to use a 
								List control. We also showed how you can 
								manually configure the List editor so that the 
								choices shown in the List are dynamic (e.g. only 
								show Cities for the selected Country). <br>
								<br>
								The UX build now contains a pre-defined List 
								Editor which can be be configured using a genie.<br>
								<br>
								In this video we show how the pre-defined List 
								Editor can be used.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_form_listControl_editor_1.swf">Watch Video 
								- Part 1</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_form_listControl_editor_2.swf">Watch Video 
								- Part 2</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_form_listControl_editor_3.swf">Watch Video 
								- Part 3</a><br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_form_listControl_editor_4.swf">Watch Video 
								- Part 4</a><br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formcontrol_listeditors_builtUsingGenie.zip">
								Download Component</a><br>
								<br>
								Date added: 2015-10-09</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX&nbsp; Component - List Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Converting a List that uses a Static Data Source 
								to a SQL Data Source and Vice-Versa</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								It is common when building a UX component that 
								uses List controls to start off with Lists that 
								are based on static data (because setting up a 
								List to use static data is so easy). Once you 
								have your UX working, you might then want to 
								convert the List to be based on a SQL database. 
								A genie allows you to easily export the data 
								from your static data source to a new table in a 
								SQL database, or to link your List to an 
								existing table in a SQL database.<br>
								<br>
								You can also easily convert a List that uses a 
								SQL data source to a static data source by 
								importing the data from the SQL table.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_list_change_datasourcetype.swf">Watch Video</a><br>
								<br>
								Date added: 2015-11-04</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Dynamically Setting the Editor and Editor Set 
								Using Javascript</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								If you want to build a responsive FormView 
								control where the Editor Set and Editor for a 
								field are set dynamically at run-time you can 
								specify the Editor Set and Editor using 
								Javascript. This allows you, for example, to 
								have a different Editor Set/Editor for a field 
								when on a tablet, or a phone.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formview_selecting_editor_using_javascript.swf">Watch Video</a><br>
								<br>
								Date added: 2015-12-05</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								CSS Defined at the FormView Control Level is in 
								Own Namespace</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								When you define a FormView control, the builder 
								allows you to define CSS classes that you use in 
								the FormView template. This CSS can either be 
								stored at the UX component level, or at the 
								FormView control level.<br>
								<br>
								If you store the CSS at the FormView control 
								level, the CSS is in its own namespace, which 
								means that if another control on the same UX 
								were to also define a CSS class with the same 
								name, it would not overwrite the CSS defined in 
								the FormView.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formView_localCSS_in_own_namespace.swf">Watch Video</a><br>
								<br>
								Date added: 2015-08-04</td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Demo Tablet Optimized Form Videos</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								Introduction to the demo table optimized form.<br>
								<br>
								<a href="http://youtu.be/QUpW5LXaoVU">Watch 
								Video - Overview</a><br>
								<a href="http://www.viddler.com/v/b78cfc90">
								Watch Video - Checklist items</a><br>
								<a href="http://www.viddler.com/v/bb2f5d80">
								Watch Video - Checklist Items 2</a><br>
								<a href="http://www.viddler.com/v/530d7987">
								Watch Video - Form Help</a><br>
								<br>
								<a href="http://downloads.alphasoftware.com/a5v12Download/Private/TabletFormsBeta/TabletForm_Sample_App_V1.zip">
								Download Component</a> </td>
							</tr>

							
							
							<tr>
								<td width="103" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								UX Component - FormView Control</td>
								<td width="143" style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								CSS Defined at the FormView Control Level is in 
								Own Namespace</td>
								<td style="font-family: Tahoma; font-size: 8pt; vertical-align: top; ">
								When you define a FormView control, the builder 
								allows you to define CSS classes that you use in 
								the FormView template. This CSS can either be 
								stored at the UX component level, or at the 
								FormView control level.<br>
								<br>
								If you store the CSS at the FormView control 
								level, the CSS is in its own namespace, which 
								means that if another control on the same UX 
								were to also define a CSS class with the same 
								name, it would not overwrite the CSS defined in 
								the FormView.<br>
								<br>
								<a href="http://www.ajaxvideotutorials.com/V12Videos/ux_formView_localCSS_in_own_namespace.swf">Watch Video</a></td>
							</tr>

							
							
							</table>
						<p>&nbsp;</p>
		<p>&nbsp;</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p><b>Sample Mobile Forms Cement Truck Inspection Application</b></p>
		<p>The sample Mobile Forms Cement Truck Inspection application is 
		intended to be used as a reference application showing a rich example of 
		a mobile forms application optimized for use on a phone. The sample 
		component can be download using
		<a href="http://downloads.alphasoftware.com/a5v12Download/CementTruckSample/CementTruck.zip">
		this link</a>. The videos listed below give an in-depth description of 
		how the component was constructed.</p>
		<p>&nbsp;</p>
		<p><img border="0" src="phoneform2.jpg"></p>
		<p><i>Screen shot of one of the pages in the sample Cement Truck 
		Inspection application</i></p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>These videos, along with comments throughout the component in 
		JavaScript code and on controls, serve as documentation of the inner 
		workings of the MobileFormsCementTruck.a5wcmp UX component.</p>
		<p>MobileFormsCementTruck.a5wcmp is a sample component that implements 
		functionality for doing offline data collection with synchronization 
		back to a server, including user authentication.<br>
		<br>
		The app was built to have a carefully crafted user interface, along with 
		extra code to facilitate debugging any changes that would be made to the 
		app and to do demonstrations and training of its use. The app provides a 
		starting point for a flat-file, multi-page, mobile forms-driven, 
		off-line-centric data collection application.<br>
		<br>
		The app was designed to be modified so that it can be customized for 
		your specific use case. It is not a simple sample for learning how to 
		develop an app in Alpha Anywhere. It is a full implementation of most of 
		its features, with extra code to handle special cases that are often 
		left as &quot;an exercise for the reader&quot; in other samples. It uses whatever 
		was necessary in Alpha Anywhere to accomplish its goals, without concern 
		for ease of programming or use of built-in or codeless features of Alpha 
		Anywhere. Some of what it accomplishes with complex JavaScript and CSS 
		may end up being made easier in future versions of Alpha Anywhere, or 
		may already have simpler solutions.<br>
		<br>
		What this app does is give an Alpha Anywhere developer working code 
		which they can either use as a complete base for minor or major 
		modifications, or use as examples from which to copy or compare small 
		snippets of code and formatting.<br>
		<br>
		These videos are aimed at a developer already familiar with the 
		facilities in Alpha Anywhere, such as the various forms of panels and 
		containers, the common properties of many controls as well as the 
		events, and the general use of editors, ViewBoxes, and FormViews. They 
		also assume familiarity with HTML, CSS, and JavaScript, and their use by 
		a developer working in Alpha Anywhere.<br>
		<br>
		These videos are not intended as an introduction to Alpha Anywhere. 
		Basic concepts and operation of the development environment are not 
		covered and knowledge of that is assumed.<br>
		<br>
		What follows is a list of the videos, along with a short explanation of 
		each. They were created assuming that they would initially be viewed in 
		order. Most of the later videos assume that the viewer has watched the 
		first four.<br>
		<br>
&nbsp;</p>
		<p><br>
		<br>
		<b>Mobile Forms: Cement Truck Sample (16:22) </b><br>
		This is the first video in this series. It shows the capabilities of the 
		app, going over most of the screens. It does not assume knowledge of 
		Alpha Anywhere development, and may be viewed by non-developers to see 
		an example of the look and feel, and functionality, of a basic mobile 
		Alpha Anywhere data capture application running on a smartphone.</p>
		<p><a href="http://www.viddler.com/v/c0810403">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Installing (12:09)</b><br>
		This video shows how to take the Zip File that has the sample's files 
		and bring them into Alpha Anywhere. It includes setting up the required 
		connection string and user security information. [A link to the zip file 
		is needed somewhere, such as here.]</p>
		<p><a href="http://www.viddler.com/v/6cc33c2e">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Panel Structure (12:27)</b><br>
		This video goes over the structure of the different screens shown by the 
		app, and the panel cards, panel navigators, and panel layouts that 
		implement those screens. It also goes over the use of panel overlays, 
		and shows the use of comments in the UX's Controls View in the Alpha 
		Anywhere development environment.</p>
		<p><a href="http://www.viddler.com/v/379d7776">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Overview of the Code 
		(14:14)</b><br>
		This video explains the general organization of the custom JavaScript 
		functions used by the app. It includes detailed explanations of how the 
		custom {dialog.object}.Messaging functions in the app are used to 
		initialize, show, and hide panel overlays for alerts, dialogs, and other 
		purposes.</p>
		<p><a href="http://www.viddler.com/v/b9fbb8c3">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Logging In the User (24:11)</b><br>
		This video explains the three forms of user authentication supported by 
		the app. It covers both the JavaScript and Xbasic code implementing 
		those features. It also covers some of the code related to 
		synchronization and how that is related to user authentication.<br>
		<a href="http://www.viddler.com/v/4e575762">Watch Video</a></p>
		<p><br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Lists and Form (27:27)</b><br>
		This video goes over the properties and settings for the list of forms, 
		the list of pages, and the FormView that displays the data fields.<br>
		<a href="http://www.viddler.com/v/e12ce955">Watch Video</a></p>
		<p><br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: New Record (11:49)</b><br>
		This video shows how the New button functionality is implemented, 
		including the lookup of a scanned QR code. It also shows the 
		implementation of deleting a record.</p>
		<p><a href="http://www.viddler.com/v/279816c0">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Editors (37:03)</b><br>
		This video goes over how the data field editors are implemented, 
		including the shared code and shared controls that are common to 
		multiple editors. It also shows how the app-specific &quot;speed test&quot; timing 
		editor is implemented.</p>
		<p><a href="http://www.viddler.com/v/e32082ab">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Handling Synchronization 
		Errors (22:21)</b><br>
		This video shows how the app responds to server-side data validation and 
		write-conflict errors. It includes how it displays those errors, and how 
		it implements a user-traversable list of the fields with errors to be 
		addressed.</p>
		<p><a href="http://www.viddler.com/v/1e0c2bde">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere: Custom CSS in a UX Component (23:10)</b><br>
		This is a general video for Alpha Anywhere developers, and is not 
		specific to this app. It does, though, cover techniques that are used in 
		the next video which is specific to this app and should be viewed before 
		that video. This video covers some of the default HTML and CSS that is 
		used for most normal Alpha Anywhere controls, and shows how to do 
		commonly needed modifications to that code through various control and 
		component properties.</p>
		<p><a href="http://www.viddler.com/v/b9268823">Watch Video</a><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: Custom CSS (28:55)</b><br>
		This video shows how the app uses custom CSS classes and styles, and 
		custom sub-themes, to give the app the visual appearance that it has. It 
		also shows the history of that design, and how it came about from the 
		work of a UX/visual designer with concern for the user experience and 
		not with how it might be implemented using Alpha Anywhere.</p>
		<p><a href="http://www.viddler.com/v/8b7668b3">Watch Video</a></p>
		<p><br>
		<br>
		<b>Alpha Anywhere Mobile Forms Cement Truck: PhoneGap (9:23)</b><br>
		This last video shows the settings used to publish the app as a normal 
		PhoneGap application for distribution. It also shows how the QR-code 
		scanning functionality is accomplished with a PhoneGap plug-in, as well 
		as the iOS-specific code for the device statusbar.</p>
		<p><a href="http://www.viddler.com/v/b8617761">Watch Video</a></p>

