public class test {

  static void recurring(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = i - 1; j >= 0; j--) {
        if (arr[i] == arr[j]) {
          System.out.println(arr[i]);
          break;
        }
      }
    }
  }

  public static void main(String arg[]) {
    int arr[] = { 3, 1, 2, 5, 4 };
    System.out.println(arr);

  }
}