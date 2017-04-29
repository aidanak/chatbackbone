
var MessageView = Marionette.View.extend({
	template: '#messageView',
	ui: {
		text: '#messageText',
		edit: '#messageEdit',
		delete:'#messageDelete'
	}, 
	events: {
		'click @ui.delete': function() {
				var l= new Messages();
				for(var i = 0; i < m.length; i++){
	    			if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
	    				if(m.models[i].get('text') === this.ui.text.text()){
	    					m.models[i].set('text', 'This message was deleted');
	    					m.models[i].set('deleted', 'yes');
	    					$('label').remove('#messageAuthor');
					    	$('label').remove('#messageText');
					    	$('label').remove('#messageDate');
	    				}
	    			}
	    		} 
	    		for(var i = 0; i < m.length; i++){
	    			if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text()) && m.models[i].get('deleted')!=='yes') {
	    				l.add(m.models[i]);
	    			}
	    		}
	    		new MessagesView({
					el: '#chat',
					collection: l
				}).render();  
		},
		'click @ui.edit': function() {	
					var l= new Messages();
					var newMessageText = prompt('Enter your message', this.ui.text.text());
					for(var i = 0; i < m.length; i++){
		    			if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
		    				if(m.models[i].get('text') === this.ui.text.text()){
		    					var res = newMessageText.concat(" (edited)");
		    					m.models[i].set('text', res);
								$('label').remove('#messageAuthor');
								$('label').remove('#messageText');
								$('label').remove('#messageDate');
		    				}
		    			}
		    		} 
		    		for(var i = 0; i < m.length; i++){
		    			if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
		    				l.add(m.models[i]);
		    			}
		    		}
		    	new MessagesView({
					el: '#chat',
					collection: l
				}).render();  
				
		} 
	}
});
var MessagesView = Marionette.CollectionView.extend({
	tagName: 'div',
	childView: MessageView
});