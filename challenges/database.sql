PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE coupons (coupon TEXT PRIMARY KEY, valid INTEGER);
INSERT INTO coupons VALUES('329849',0);
INSERT INTO coupons VALUES('454896',0);
INSERT INTO coupons VALUES('692784',1);
INSERT INTO coupons VALUES('449314',1);
INSERT INTO coupons VALUES('863971',1);
INSERT INTO coupons VALUES('146358',0);
INSERT INTO coupons VALUES('567237',1);
INSERT INTO coupons VALUES('895074',1);
INSERT INTO coupons VALUES('357207',0);
INSERT INTO coupons VALUES('48065',0);
INSERT INTO coupons VALUES('415479',1);
COMMIT;
