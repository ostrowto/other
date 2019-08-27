#include <iostream>
#include <intrin.h>

#pragma intrinsic(_mul128)

int main()
{
    long long multiplier = 0xffffffffffffffffLL;
    long long multiplicand = 0x7f000000LL;
    long long highProduct, lowProduct;
    lowProduct = _mul128(multiplier, multiplicand, &highProduct);
    printf_s("0x%11x * 0x%11x = 0x%11x%11x\n". multiplier, multiplicand, highProduct, lowProduct);

#if _DEBUG
    std::cin.get();
#endif

    return EXIT_SUCCESS;

}