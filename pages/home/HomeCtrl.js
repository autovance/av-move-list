/**
*/

'use strict';

function HomeCtrl() {
	//TODO - put any directive code here
	this.all_users = [{
		"user_profile_id": "04A86C10-D567-A85C-84B8-10DDE4E11252",
		"first_name": "Aristotle",
		"last_name": "Frost"
	}, {
		"user_profile_id": "BF740CFD-B8BD-566B-AC0E-A101B46ABF61",
		"first_name": "Carolyn",
		"last_name": "Michael"
	}, {
		"user_profile_id": "FA858307-A850-24DD-079F-D4EC08E4F8F2",
		"first_name": "Gary",
		"last_name": "Singleton"
	}, {
		"user_profile_id": "78F69128-D13F-DEFB-925E-917CDA8AFDA8",
		"first_name": "Harrison",
		"last_name": "Mullins"
	}, {
		"user_profile_id": "A0C5E88F-50AB-230E-11A0-4D2DC3F4B918",
		"first_name": "Scarlet",
		"last_name": "Rowe"
	}, {
		"user_profile_id": "5B8B6E63-631D-EE4D-59FF-EBCE9C6DFAAB",
		"first_name": "Indira",
		"last_name": "Byers"
	}, {
		"user_profile_id": "BBE63B40-6B5B-9277-7766-6A3F536B471D",
		"first_name": "Stephanie",
		"last_name": "Mills"
	}, {
		"user_profile_id": "1C812B42-E4BF-B832-0C32-449E5AFE048E",
		"first_name": "Cathleen",
		"last_name": "Espinoza"
	}];

	this.selected_users = [{
		"user_profile_id": "FA858307-A850-24DD-079F-D4EC08E4F8F2",
		"first_name": "Gary",
		"last_name": "Singleton"
	}, {
		"user_profile_id": "A0C5E88F-50AB-230E-11A0-4D2DC3F4B918",
		"first_name": "Scarlet",
		"last_name": "Rowe"
	}];
}

angular.module('myApp').controller('HomeCtrl', HomeCtrl);
