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

    [_property setObject:[TiUtils stringValue:@"7QOO1OhwbgpKeemcsebJkYdVBZjTeyRi"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"2lSyD7bYVBNpNj6XU8rKUVSqzQ5NByZ3"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"7o5V0qJckOYmOyzmHMn4YJoIYLMcjpNq"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"JcA0G6aJV5xVEpzPnNwrEuWShKh9CT8X"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"WK4c5coyyX3MOSsCYCBoX3sk27AhW3xh"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"tk1yJDIjS1ZOZjdaez3HDQOWvNG6463X"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
