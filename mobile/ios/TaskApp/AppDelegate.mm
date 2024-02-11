#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"TaskApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  // return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];

  RCTBundleURLProvider *settings = [RCTBundleURLProvider sharedSettings];
  return [RCTBundleURLProvider jsBundleURLForBundleRoot:@"index"
                                           packagerHost:settings.packagerServerHost
                                              enableDev:YES
                                     enableMinification:NO
                                        inlineSourceMap:NO];
#else
  // return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];

  NSBundle *mainBundle = [NSBundle mainBundle];
  return [mainBundle URLForResource:@"main"
                      withExtension:@"jsbundle"];
#endif
}

@end
