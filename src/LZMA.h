#ifndef LZMA_H
#define LZMA_H

namespace LZMA
{
    struct LZMA_buffer
    {
        unsigned char* data;
        size_t length;
    };

    class LZMA
    {
        public:
            static LZMA_buffer* Compress(const LZMA_buffer &buffer);
            static LZMA_buffer* Decompress(const LZMA_buffer &buffer);
    };
}

#endif