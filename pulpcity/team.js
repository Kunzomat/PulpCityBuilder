alasql('CREATE localStorage DATABASE IF NOT EXISTS pulp_city_db');
alasql('ATTACH localStorage DATABASE pulp_city_db');

alasql("CREATE TABLE IF NOT EXISTS pulp_city_db.teams (id string, name string, faction_id string)");
alasql("CREATE TABLE IF NOT EXISTS pulp_city_db.team_members (id string, team_id string, supreme_id string)");

alasql('CREATE TABLE supreme_factions (supreme_id string, faction_id string)');
alasql('CREATE TABLE minion_factions (minion_id string, faction_id string)');
alasql('CREATE TABLE minions (id string, name string, level smallint, role string, availability smallint)');
alasql('CREATE TABLE supremes (id string, name string, level smallint, role string, minions smallint, ap smallintber, ap_plus smallint, origin string, freelancers boolean)');
alasql('CREATE TABLE factions (id string, name string)');
alasql('CREATE TABLE supreme_forbids (supreme_id string, forbid_id string)');
alasql('CREATE TABLE supreme_allows (supreme_id string, allow_id string)');
alasql('CREATE TABLE supreme_troopers (supreme_id string, faction_id string, number smallint)');
alasql('CREATE TABLE supreme_shifts (supreme_id string, shift_id string)');
alasql('CREATE TABLE supreme_exclusiv_minions (supreme_id string, minion_id string)');
alasql('CREATE TABLE cards (id string, name string, faction_id string, supreme_id string, origin string, type string)');