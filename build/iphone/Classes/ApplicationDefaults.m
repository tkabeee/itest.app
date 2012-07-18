/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"K2QysrLeGXUIwIcIu7xvAmeggycOaMbY"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"nGTvwxD0htUBbPA3qYzCj8SpDSYztU6F"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"Fe6oSuP3BBaDPNrRAkY4vVYLcCu3qPqk"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"4PfbQVUXCHhGIPf3SjirKtxwu3fOViGR"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"eRJZMkpBGc6PQlXhXJWiAREIi5Gf1FBz"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"LENPE5kukrVGPny0OoAIDkqTr5LSkqqv"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
