A5.themes.add('Alpha',{
	general: {
		pageClassName: 'page',
		headingClassName: 'heading',
		text: {
			className: '',
			highlightClassName: 'highlight'
		},
		linkClassName: 'link',
		group: {
			className: 'group',
			labelClassName: 'groupLabel'
		},
		icons: {
			expand: '',
			collapse: '',
			help: '',
			info: '',
			warning: '',
			error: '',
			menu: '',
			refresh: '',
			refreshDisabled: '',
			panel: {
				collapseRight: '',
				expandRight: '',
				collapseLeft: '',
				expandLeft: ''
			},
			list: {
				navigation: '',
				navigationSubtle: ''
			},
			edit: {
				dropdown: '',
				date: '',
				dateTime: '',
				time: '',
				lookup: ''
			}
		}
	},
	grid: {
	},
	ux: {
	},
	panelCard: {
		base: {
			className: '',
			header: {
				className: 'panelHeader'
			},
			body: {
				className: 'panelBody'
			},
			footer: {
				className: 'panelFooter'
			}
		}
	},
	panelNavigator: {
		base: {
			className: '',
			header: {
				className: 'panelHeader'
			},
			body: {
				className: ''
			},
			footer: {
				className: 'panelFooter'
			},
			indicator: {
				className: '',
				panelClassName: '',
				panelSelectedClassName: ''
			}
		}
	},
	panelLayout: {
		base: {
			className: '',
			header: {
				className: 'panelHeader'
			},
			body: {
				className: ''
			},
			footer: {
				className: 'panelFooter'
			},
			dock: {
				panel: {
					beforeClassName: 'panelDockBefore',
					afterClassName: 'panelDockAfter'
				},
				flowLock: {
					className: ''
				}
			}
		}
	},
	accordion: {
	},
	tab: {
		base: {
			location: 'top',
			className: 'tabTop',
			tabsClassName: 'tabTopBand',
			tabClassName: 'tabTopTab',
			tabSelectedClassName: 'tabTopTabSelected',
			tabDisabledClassName: 'tabTopTabDisabled',
			panesClassName: '',
			paneClassName: 'tabTopPane'
		}
	},
	tabBand: {
	},
	menu: {
		base: {
			className: 'menu',
			innerClassName: '',
			iconColumn: {
				className: '',
				preventIndentClassName: '',
				width: '32px'
			},
			cascadeOffsetX: 0,
			cascadeOffsetY: -1,
			item: {
				className: 'menuItem',
				labelClassName: 'menuItemLabel',
				hoverClassName: 'menuItemHover',
				selectedClassName: 'menuItemSelected',
				disabledClassName: 'menuItemDisabled',
				disabledHoverClassName: '',
				cascadeClassName: 'menuItemCascade',
				separatorClassName: 'menuSeparator',
				titleClassName: 'menuTitle',
				radioImage: '',
				checkImage: ''
			},
			pointer: {
				size: 10,
				upClassName: 'pointerUp',
				leftClassName: 'pointerLeft',
				rightClassName: 'pointerRight',
				downClassName: 'pointerDown'
			}
		}
	},
	menubar: {
	},
	window: {
		base: {
			className: 'window',
			outerWrapClassName: '',
			innerWrapClassName: '',
			activeClassName: '',
			adjustmentClassName: '',
			lockUIClassName: '',
			title: {
				location: '',
				direction: '',
				className: 'windowTitle',
				tools: {
					inset: '2px',
					verticalInset: '',
					className: ''
				}
			},
			header: {
				className: 'windowHeader'
			},
			tbar: {
				className: 'windowTBar'
			},
			body: {
				className: 'windowBody'
			},
			buttons: {
				className: 'windowButtons'
			},
			bbar: {
				className: 'windowBBar'
			},
			footer: {
				className: 'windowFooter'
			},
			resizer: {
				className: 'windowResize',
				thumbImage: ''
			},
			pointer: {
				size: 10,
				upClassName: 'pointerUp',
				leftClassName: 'pointerLeft',
				downClassName: 'pointerDown',
				rightClassName: 'pointerRight'
			},
			_defaultTools: {
				close: {
					action: 'close',
					name: 'close',
					image: '',
					imageHover: '',
					imagePressed: ''
				}
			}
		}
	},
	listbox: {
		base: {
			className: 'list',
			disabledClassName: 'listDisabled',
			focusClassName: 'listFocus',
			columnLayout: {
				header: {
					className: 'listColHeader',
					item: {
						className: 'listColHeaderItem',
						hoverClassName: 'listColHeaderItemHover',
						order: {
							ascendingImage: '',
							descendingImage: '',
							className: ''
						},
						resize: {
							location: 'after',
							className: '',
							handle: {
								className: '',
								size: '14px'
							}
						}
					}
				},
				data: {
					item: {
						className: ''
					}
				}
			},
			view: {
				navigation: {
					prev: {
						className: 'listNavButtonPrev',
						pressedClassName: 'listNavButtonPressed'
					},
					next: {
						className: 'listNavButtonNext',
						pressedClassName: 'listNavButtonPressed'
					}
				}
			},
			group: {
				navigator: {
					location: 'right',
					offset: 4,
					size: 28,
					className: 'listNav',
					focusClassName: ''
				}
			},
			header: {
				className: 'listHeader'
			},
			footer: {
				className: 'listFooter'
			},
			lock: {
				className: ''
			},
			content: {
				header: {
					className: ''
				},
				footer: {
					className: ''
				}
			},
			item: {
				className: 'listItem',
				hoverClassName: 'listItemHover',
				selectedClassName: 'listItemSelected',
				titleClassName: 'listItemTitle',
				separatorClassName: ''
			}
		}
	},
	spinList: {
		base: {
			className: 'spinList',
			disabledClassName: 'spinListDisabled',
			item: {
				className: 'spinListItem'
			}
		}
	},
	tree: {
	},
	datePicker: {
		base: {
			className: '',
			disabledClassName: 'datePickerDisabled',
			calendar: {
				daysOfWeek: {
					className: 'datePickerDOW'
				},
				weeksOfYear: {
					className: 'datePickerWOY',
					headerClassName: ''
				},
				date: {
					className: 'datePickerDate',
					weekendClassName: 'datePickerDate',
					todayClassName: 'datePickerDateToday',
					item: {
						className: 'datePickerItem',
						hoverClassName: 'datePickerItemHover',
						selectedClassName: 'datePickerItemSelected',
						disabledClassName: 'datePickerItemDisabled',
						outOfRangeClassName: 'datePickerItemOOR'
					}
				}
			},
			navigator: {
				header: {
					className: '',
					prevIcon: '',
					nextIcon: '',
					prevIconHover: '',
					nextIconHover: '',
					todayButton: {
						location: 'right',
						html: 'Today',
						tip: 'Select today\'s date'
					},
					item: {
						className: 'datePickerHeaderItem',
						hoverClassName: 'datePickerHeaderItemHover',
						selectedClassName: 'datePickerHeaderItemSelected'
					}
				},
				panel: {
					className: '',
					edit: {
						className: 'edit'
					},
					item: {
						className: 'datePickerItem',
						hoverClassName: 'datePickerItemHover',
						selectedClassName: 'datePickerItemSelected',
						disabledClassName: 'datePickerItemDisabled'
					}
				}
			}
		}
	},
	timePicker: {
		base: {
			className: '',
			disabledClassName: 'timePickerDisabled',
			edit: {
				className: 'edit',
				buttonClassName: 'timePickerButton',
				buttonImage: 'cssIcon='
			},
			meridianClassName: 'timePickerMeridian'
		}
	},
	edit: {
		base: {
			className: 'edit',
			errorClassName: 'editError',
			watermark: {
				className: 'editWatermark'
			}
		}
	},
	editButtonGroup: {
		base: {
			watermark: {
				className: 'editWatermark editBGWatermark'
			},
			container: {
				className: 'editBG',
				hoverClassName: 'editBGHover',
				focusClassName: 'editBGFocus',
				errorClassName: 'editBGError',
				separatorClassName: '',
				editClassName: 'editBGEdit',
				button: {
					html: '&rsaquo;',
					className: 'editBGButton',
					hoverClassName: 'editBGButtonHover',
					pressedClassName: 'editBGButtonPressed'
				}
			},
			window: {
				pointer: {
					show: false
				}
			}
		}
	},
	button: {
		base: {
			className: 'button',
			hoverClassName: 'buttonHover',
			pressedClassName: 'buttonPressed',
			disabledClassName: 'buttonDisabled'
		},
		confirm: {
			className: 'button buttonConfirm',
			hoverClassName: 'buttonHover',
			pressedClassName: 'buttonPressed',
			disabledClassName: 'buttonDisabled'
		},
		deny: {
			className: 'button buttonDeny',
			hoverClassName: 'buttonHover',
			pressedClassName: 'buttonPressed',
			disabledClassName: 'buttonDisabled'
		}
	},
	buttonDropdown: {
		base: {
			className: 'buttonDD',
			hoverClassName: 'buttonHover',
			pressedClassName: 'buttonPressed',
			disabledClassName: 'buttonDisabled',
			contentClassName: 'buttonContent',
			dropdown: {
				location: 'right',
				className: 'buttonDDArrow',
				html: '',
				icon: ''
			}
		}
	},
	buttonSplit: {
		base: {
			className: 'buttonSplit',
			hoverClassName: 'buttonHover',
			pressedClassName: 'buttonPressed',
			disabledClassName: 'buttonDisabled',
			contentClassName: 'buttonContent',
			dropdown: {
				location: 'right',
				className: 'buttonSplitArrow',
				hoverClassName: 'buttonSplitArrowHover',
				html: '',
				icon: ''
			}
		}
	},
	buttonList: {
		base: {
			className: '',
			button: {
				className: 'button',
				firstClassName: 'buttonGroupFirst',
				lastClassName: 'buttonGroupLast',
				middleClassName: 'buttonGroupMid',
				hoverClassName: 'buttonHover',
				pressedClassName: 'buttonPressed',
				disabledClassName: 'buttonDisabled'
			}
		},
		vertical: {
			className: '',
			button: {
				className: 'button',
				firstClassName: 'buttonGroupVFirst',
				lastClassName: 'buttonGroupVLast',
				middleClassName: 'buttonGroupVMid',
				hoverClassName: 'buttonHover',
				pressedClassName: 'buttonPressed',
				disabledClassName: 'buttonDisabled'
			}
		}
	},
	slider: {
		base: {
			className: 'slider',
			disabledClassName: 'sliderDisabled',
			innerClassName: 'sliderInner',
			handle: {
				className: 'sliderHandle',
				hoverClassName: 'sliderHandleHover',
				selectedClassName: 'sliderHandleSelected',
				minClassName: '',
				maxClassName: ''
			},
			range: {
				className: 'sliderRange',
				hoverClassName: 'sliderRangeHover',
				selectedClassName: 'sliderRangeSelected'
			}
		}
	},
	switch: {
		base: {
			flow: 'ltr',
			className: 'switch',
			disabledClassName: 'switchDisabled',
			onClassName: 'switchOn',
			offClassName: '',
			innerClassName: 'switchInner',
			rightClassName: 'switchRight',
			leftClassName: 'switchLeft',
			buttonClassName: 'switchButton'
		}
	},
	scroll: {
		base: {
			indicator: {
				h: {
					className: 'scrollIndH',
					barClassName: 'scrollIndHBar',
					location: 'bottom',
					offset: '0px',
					left: '0px',
					right: '0px'
				},
				v: {
					className: 'scrollIndV',
					barClassName: 'scrollIndVBar',
					location: 'right',
					offset: '0px',
					top: '0px',
					bottom: '0px'
				}
			}
		}
	},
	scroller: {
	}
});